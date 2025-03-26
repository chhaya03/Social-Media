# React + Vite

This project is a basic social media application built with React. It demonstrates core functionality, including post creation, listing posts, and navigating between different views.

## Features
- **Home Page:**
  - Displays a list of user posts.
- **Create Post:**
  - A form for users to create and submit new posts.
- **Navigation Sidebar:**
  - Allows switching between the Home and Create Post views.
- **Footer:**
  - Contains links to key sections (e.g., Features, Pricing, FAQs, About).

## How It Works
1. **Home View:**
   - Displays all posts using the `PostList` component.
   - Posts are managed by the `PostListProvider` context, allowing easy state sharing across components.

2. **Create Post View:**
   - A form for creating posts using input fields like:
     - User ID
     - Post Title
     - Post Content
     - Reactions Count
     - Tags
   - Posts are added to the shared state managed by `PostListProvider`.

3. **Dynamic Navigation:**
   - Uses the `Sidebar` component to toggle between the Home and Create Post views based on the selected tab.

4. **Footer:**
   - Provides navigation links to various app sections.


<h1>Usage</h1><br>
<h3>Navigating the App</h3>
Use the Sidebar to switch between the "Home" and "Create Post" views.<br>
<h3>Creating a Post</h3>
<ul>
 <li> Navigate to the "Create Post" tab.</li>
<li>Fill in the form fields (User ID, Post Title, Post Content, etc.).</li>
<li>Click the "Post" button to submit your post.</li>
<li>The post will appear in the "Home" view.
</ul><br>
<h3>Viewing Posts</h3>
Navigate to the "Home" tab to view all posts, including newly created ones.

<h1>
Technologies Used</h1>
React: Frontend library for building user interfaces.<br>
Context API: Manages the state of posts across components.<br>
CSS: Styling for the application.<br>
