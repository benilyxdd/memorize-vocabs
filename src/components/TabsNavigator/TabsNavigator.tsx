import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

import "./TabsNavigator.css";
import VocabsListView from "../../Pages/VocabsListView/VocabsListView";
import VocabsLearnView from "../../Pages/VocabsLearnView/VocabsLearnView";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabsNavigator-tabpanel-${index}`}
			aria-labelledby={`tabsNavigator-tab-${index}`}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `tabsNavigator-tab-${index}`,
		"aria-controls": `tabsNavigator-tabpanel-${index}`,
	};
}

const TabsNavigator = () => {
	const [value, setValue] = useState(0);

	const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box style={{ display: "flex" }}>
			<Box>
				<Tabs
					orientation="vertical"
					onChange={onTabChange}
					value={value}
				>
					<Tab label="Study" {...a11yProps(0)}></Tab>
					<Tab label="List" {...a11yProps(1)}></Tab>
				</Tabs>
			</Box>

			<TabPanel value={value} index={0}>
				<VocabsLearnView />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<VocabsListView />
			</TabPanel>
		</Box>
	);
};

export default TabsNavigator;
