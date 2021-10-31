import "./index.css";

// Components
import { Navigation } from ".";
import { NavItem } from "../NavItem";

// Stories
import { Active } from "../NavItem/NavItem.stories.js";

export default {
  title: "components/molecules/Navigation",
  component: Navigation,
  subcomponents: { NavItem },
  parameters: {
    docs: {
      description: {
        component:
          "Here we are rendering the component itself with the Story args passed as props. Code snippet is rendering correctly.",
      },
      source: {
        type: "dynamic",
        excludeDecorators: true,
        state: "open",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "50%" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Navigation {...args} />;

export const UsingStoryArgsOnly = Template.bind({});
UsingStoryArgsOnly.args = {
  children: <NavItem {...Active.args} />,
};

export const ReusedStoryAsComponent = Template.bind({});
ReusedStoryAsComponent.args = {
  children: <Active {...Active.args} />,
};
ReusedStoryAsComponent.parameters = {
  docs: {
    description: {
      story:
        "Here we are re-using the Story as shown in the [docs](https://storybook.js.org/docs/react/workflows/stories-for-multiple-components#reusing-subcomponent-stories). Notice how the code snippet now shows `<bound Template  />`.",
    },
  },
};
