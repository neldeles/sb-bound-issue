import { NavItem } from ".";
import { HomeIcon } from "@heroicons/react/outline";
import "./index.css";

export default {
  title: "components/atoms/navigation/NavItem",
  component: NavItem,
  decorators: [
    (Story) => (
      <div className="decorator">
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Individual navigation items to be used with the Navigation component",
    docs: {
      source: {
        type: "dynamic",
        excludeDecorators: true,
      },
    },
  },
};

const Template = (args) => <NavItem {...args} />;

export const All = (args) => {
  return (
    <>
      <Active {...Active.args} label="Active Nav Item" className="mb-4" />
      <Inactive {...Inactive.args} label="Inactive Nav Item" />
    </>
  );
};

export const Active = Template.bind({});
Active.args = {
  label: "Budget",
  href: "#href",
  icon: HomeIcon,
};

Active.parameters = {
  docs: {
    description: {
      story:
        "If a navigation item without sub-items is the current page of the web app.",
    },
    source: {
      code: null,
    },
  },
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Active.args,
  current: false,
};

Inactive.parameters = {
  docs: {
    description: {
      story:
        "Navigation item without sub-items. It is **_not_** the current page of the web app.",
    },
  },
};
