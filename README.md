- Component-based architecture is a way of building applications using small, reusable components that make the code easier to manage and maintain.

- The Virtual DOM is React's copy of the real DOM that helps update only the parts of the page that change, improving performance.


- I used the Random User API to fetch student data, displayed a loading message while fetching, and showed an error message if the request failed.


# Controlled Forms
1. Form values are managed by React state using useState.
2. Inputs use value and onChange.
3. React always knows the current value of the input.

# Uncontrolled Forms
1. Form values are managed by the DOM instead of React state.
2. Inputs use ref and defaultValue.
3. Values are accessed when needed, usually during form submission.