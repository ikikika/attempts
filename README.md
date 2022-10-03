# Requirements
1. Node v16
1. NPM v8

# Installation
1. In project root, run `npm install` to install dependencies
1. AFter installation complete, fun `npm run start` to start server
1. Project should be accessible through `http://localhost:3000`.

# Testing
1. After installing dependencies, run `npm run test`

Sample test output:
```
 PASS  src/components/header/__tests__/HeaderComponent.test.tsx
 PASS  src/pages/__tests__/ArticlePage.test.tsx
 PASS  src/components/header/__tests__/HeaderNavIconWithLabel.test.tsx
 PASS  src/components/article/__tests__/SubscribeComponent.test.tsx
 PASS  src/components/header/__tests__/SocialMediaWrapperComponent.test.tsx
 PASS  src/components/article/__tests__/BylineComponent.test.tsx
 PASS  src/components/article/__tests__/SidebarPopularComponent.test.tsx
 PASS  src/components/article/__tests__/ArticleContentBodyComponent.test.tsx
 PASS  src/components/article/__tests__/ReadMoreComponent.test.tsx
 PASS  src/components/article/__tests__/FollowUsComponent.test.tsx
 PASS  src/components/article/__tests__/ArticleHeroImageComponent.test.tsx
 PASS  src/components/article/__tests__/RelatedTopicsComponent.test.tsx

Test Suites: 12 passed, 12 total
Tests:       12 passed, 12 total
Snapshots:   12 passed, 12 total
Time:        10.023 s
```

# Technologies used
1. React 18
1. Typescript
1. Redux for state management
1. Unit Testing using Jest

# Approach
1. Build basic header component for desktop
1. Build basic header component for mobile
1. Refine header component for desktop on scroll
1. Refine header component for md devices
1. Build title, image and caption component 
1. Build author, date, social media component
1. Build content body, integrate 'read also' component 
1. Build sidebar popular component
1. Build subscription widgets
1. Optimise for mobile
1. Refactor with redux
1. Unit tests 

