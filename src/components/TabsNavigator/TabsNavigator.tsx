import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

import "./TabsNavigator.css";
import VocabsListView from "../../Pages/VocabsListView/VocabsListView";

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

const TabsNavigator = () => {
	const [value, setValue] = useState(0);

	const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box style={{ display: "flex" }}>
			<Box>
				<Tabs orientation="vertical" onChange={onTabChange}>
					<Tab label="Study"></Tab>
					<Tab label="List"></Tab>
				</Tabs>
			</Box>

			<TabPanel value={value} index={1}>
				<VocabsListView />
			</TabPanel>
		</Box>
	);
};

export default TabsNavigator;
