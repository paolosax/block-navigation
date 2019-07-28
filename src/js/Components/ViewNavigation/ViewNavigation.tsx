import { Div } from "utils/components";
import { pr_store } from "utils/data/plugin";
import { BlockList } from "Components/ViewNavigation/BlockList/BlockList";
import { Toolbar } from "./Toolbar/Toolbar";

interface WithSelectProps extends Pick<State, "moving_type"> {
	moving: boolean;
	root_ids: ReturnType<
		typeof import("wordpress__block-editor/store/selectors").getBlockOrder
	>;
}

interface Props extends WithSelectProps {}

const { withSelect } = wp.data;
const { Fragment } = wp.element;

export const ViewNavigation = withSelect<WithSelectProps>(select => ({
	moving: select(pr_store).isMoving(),
	moving_type: select(pr_store).getMovingType(),
	root_ids: select("core/block-editor").getBlockOrder()
}))((props: Props) => {
	const { moving, moving_type, root_ids } = props;

	return (
		<Fragment>
			{moving && moving_type === "by_click" && <Toolbar />}
			<Div id="navigation">
				<BlockList ids={root_ids} level={0} parent_id="" />
			</Div>
		</Fragment>
	);
});