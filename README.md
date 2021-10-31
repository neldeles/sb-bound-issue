# Storybook issue

Code snippet rendered in Source block is `<bound Template/>` instead of the subcomponent.

Please take a look at **_src/components/Navigation/Navigation.stories.js_** for a reproduction of the issue.

Actual output:

```jsx
<Navigation>
  <bound Template href="#href" icon={() => {}} label="Budget" />
</Navigation>
```

Expected:

```jsx
<Navigation>
  <NavItem href="#href" icon={() => {}} label="Budget" />
</Navigation>
```
