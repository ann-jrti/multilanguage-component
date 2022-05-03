# Web Developer Test

The purpose of this exercise was to show my ability to create a functional, modern and user friendly component. The application should be written in HTML5 that passes W3C validation, use CSS3 and support modern browsers. Technology stack:
- JavaScript
- React.js/TypeScript
- CSS3: You can use preprocessors (SASS or LESS), Styled Components. Using Tailwinds would be a plus
- HTML5
  
## The test

You have been asked to create a multilanguage component.

It must accept 4 languages, english, spanish, catalan and portuguese.

All languages should be displayed in tabs.

Caveats: have in mind that `eventName` and `capacity` are not multilang, capacity is a number.

The component must submit a payload with the following schema:

```javascript
const payload: {
  eventName: '',
  title: {
    en: '', 
    es: '',
    ca: '',
    pt: '',
  },
  subtitle: {
    en: '', 
    es: '',
    ca: '',
    pt: '',
  },
  description: {
    en: '', 
    es: '',
    ca: '',
    pt: '',
  },
  capacity: 0
}
```

## Acceptance criteria

GIVEN that I'm a user
WHEN I render the component
THEN the english language is showed by default

GIVEN that I'm a user
WHEN I click on the ES or any other language tab
THEN I see the content of the form in that language

GIVEN that I'm a user
WHEN I fill the data
AND click on the create button
THEN I see console.log with the payload


Design: 
![test-2ewd](https://user-images.githubusercontent.com/84371647/166450160-e62dda12-8b99-4a6a-a5ee-83d4069f5afb.png)


