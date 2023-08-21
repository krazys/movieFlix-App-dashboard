import "../../../styles/dashboard/ReadMe.scss";

const ReadMe = () => {
  return (
    <div className="readMeContainer">
      <h1>
        TMDB-like Movie & Shows Info WebApp with some Netflix-like UI Elements
        (React & TypeScript) 💥
      </h1>

      <hr />
      <h2>Summary</h2>
      <hr />
      <p>
        This repository contains a (work in progress eventual - full features &
        functionality ) 🌱 web application that I have built from the ground up.
        The WebApp serves as my personal implementation of TMDB (The Movie
        Database), providing a comprehensive movie and shows database with some
        captivating Netflix-like UI elements. The project is developed using
        React with TypeScript, making it a powerful and efficient application.
      </p>
      <hr />
      <h3>Features ⚡️</h3>
      <hr />
      <div className="listSection">
        <ul>
          <li>
            <span>TMDB-like Database:</span> This project features a movie and
            shows database that allows users to explore a vast collection of
            films and TV shows fetched from TMDB.
          </li>
          <li>
            <span>Netflix-like UI Elements:</span> The WebApp boasts an
            attractive and user-friendly UI, inspired by Netflix's captivating
            design, offering a seamless browsing experience.
          </li>
          <li>
            <span>React Routing:</span> The application leverages React Routing
            for smooth navigation between different sections and pages with
            Private & Nested Routes.
          </li>
          <li>
            <span>State Management with Hooks:</span> For efficient state
            management, the project utilizes React Hooks, ensuring optimized and
            well-organized data handling.
          </li>
          <li>
            <span>Responsive UI with SCSS:</span> The user interface is
            responsive and adapts smoothly to various screen sizes, powered by
            the SCSS preprocessor for enhanced styling.
          </li>
          <li>
            <span>Lazy Load Components:</span> React.lazy lazy-loaded component
            wrapped in React's Suspense component & also startTransition API.
          </li>
          <li>
            <span>React Error Boundary:</span> to catch JS errors in the child
            component tree if any to logs those errors, and display a fallback
            UI.
          </li>
          <li>
            <span>FireBase:</span> BaaS that I use services such as database
            authentication and cloud storage.
          </li>
          <li>
            <span>Minimal 3rd Party Dependencies:</span>To keep the project
            lightweight using Vite, the project utilizes only a few external
            dependencies some of them are:
            <ol>
              <li>
                <span>react-router-dom</span> for routing purposes.
              </li>
              <li>
                <span>react-swipeable</span> to incorporate smooth swipe actions
                on mobile.
              </li>
              <li>
                <span>sass</span> for the CSS preprocessor to maintain scalable
                and maintainable styles.
              </li>
              <li>
                <span>TypeScript </span>for type safety and to improve my
                skills.
              </li>
              <li>
                <span>axios </span> for easy API integration.
              </li>
              <li>
                <span>react-icons</span> for incorporating icons seamlessly.
              </li>
              <li>
                <span>react-error-boundary </span> to catch JavaScript errors in
                the child component tree if any, and display a fallback UI
              </li>
            </ol>
          </li>
          <li>
            <span>To be continued...</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReadMe;
