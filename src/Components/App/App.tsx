import { pr_store } from "utils/data";
import { Tabs } from "../Tabs/Tabs";
import { AppContainer } from "./AppContainer";
import { ViewNavigation } from "../ViewNavigation/ViewNavigation";
import { ViewSettings } from "../ViewSettings/ViewSettings";

interface WithSelectProps extends Pick<State, "view"> {}

const { withSelect } = wp.data;

export const App: React.ComponentType = withSelect<WithSelectProps>(select => ({
	view: select(pr_store).getView()
}))(props => {
	const { view } = props;

	return (
		<AppContainer>
			<Tabs />
			{view === "navigation" ? <ViewNavigation /> : <ViewSettings />}
		</AppContainer>
	);
});
