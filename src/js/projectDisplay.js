Vue.component("ProjectBox", {
  template: `
    <div class="projectbox">
      <h3>{{ project.title }}</h3>
      <div class="projectimage">
        <img :src="project.image" :alt="project.imageAlt" />
      </div>
      <p>{{ project.description }}</p>
      <div style="text-align: center;">
        <button 
          class="projectdetail"
          @click.prevent="openPopup"
        >
          <strong>Learn More</strong>
        </button>
      </div>
    </div>  
  `,
  props: {
    project: {
      type: Object,
      required: true,
      default: []
    }
  },
  methods: {
    openPopup() {
      this.$emit("open-popup", this.project.popupId);
    }
  }
});

Vue.component("ProjectPopup", {
  template: `
    <div
      class="project-popup"
      :class="{ 'pop-disabled': hidden, 'active-popup': !hidden }"
      :aria-hidden="hidden"
    >
      <div style="text-align: right">
        <button class="close-popup" @click="closePopup">Close</button>
      </div>

      <h1>{{ content.title }}</h1>
      <p><strong>Challenge</strong>: {{ content.challenge }}</p>
      <p><strong>Solution</strong>: {{ content.solution}}</p>
      <p><strong>Result</strong>: {{ content.result }}</p>
      <div style="text-align: center">
        <a target="_blank" :href="content.link">
          <button class="viewproject">
            <strong>View Site</strong>
          </button>
        </a>
      </div>
      <br>
      <br>
    </div>
  `,
  methods: {
    closePopup() {
      this.$emit("close-popup");
    }
  },
  props: {
    activePopup: {
      type: String,
      required: true,
      default: ""
    },
    content: {
      type: Object,
      required: true,
      default: {}
    }
  },
  computed: {
    hidden() {
      return this.activePopup !== this.content.id;
    }
  }
});

const app = new Vue({
  el: "#project-display",
  template: `
    <div class="project-display">
      <ProjectBox v-for="(project, index) in projects" 
        :key="project.id" 
        :project="projects[index]"
        @open-popup="displayPopup" 
      />
      <ProjectPopup v-for="(popup, index) in popups"
        :key="popup.title"
        :content="popups[index]"
        :activePopup="activePopup"
        @close-popup="hidePopup"
      />
    </div>
  `,
  methods: {
    displayPopup(id) {
      this.activePopup = id;
    },
    hidePopup(id) {
      this.activePopup = "";
    }
  },
  data: {
    message: "Hello World!",
    projects: [
      {
        id: 0,
        title: "Hockey Scrub",
        description: `An NHL player stat tracking app built using Next.js and React. 
          Implements a fast autocompletion algorithm for search, and clean, 
          easy-to-read UI design.`,
        image: "/static/blog/images/projects/hockey_scrub_thumbnail.png",
        imageAlt: "Hockey Scrub",
        popupId: "hockey-scrub-popup"
      },
      {
        id: 1,
        title: "css-minifier.rs",
        description: `A CLI tool for minifying css that can be used
          standalone or inside a Unix-style pipeline, written in Rust.`,
        image: "/static/blog/images/projects/css-minifier-thumbnail.png",
        imageAlt: "css-minifier.rs",
        popupId: "css-minifier-popup"
      },
      {
        id: 2,
        title: "alexgarrett.tech",
        description: `My personal website, built with Python and Django.
          Includes CRUD functionality and interaction with a SQL database,
          along with robust form validation and HTML/JavaScript escaping.`,
        image: "/static/blog/images/projects/blog_thumbnail.png",
        imageAlt: "Blog",
        popupId: "blog-popup"
      },
      {
        id: 3,
        title: "Audible Sights",
        description: `A web app which converts images to sound in a way that
          conveys spatial information, potentially allowing users to "see"
          with their ears.`,
        image: "/static/blog/images/projects/audible_sights_thumbnail.png",
        imageAlt: "Audible Sights",
        popupId: "audible-sights-popup"
      }
    ],
    activePopup: "",
    popups: [
      {
        id: "hockey-scrub-popup",
        title: "Hockey Scrub",
        challenge: `
          I wanted to build a fast and easy to use
          stat tracking app to allow users to quickly look up info about current
          and past players in the National Hockey League, with a cleaner and more
          pleasant experience than some other, similar applications. I also wanted
          to implement a very fast player search with autocompletion.
        `,
        solution: `
          I used the React and the Next.js framework to
          build the UI and general app structure, and reached out to the NHL's own
          stats API to fetch player stats. For the player search component, I
          wrote an autocompletion library that uses a prefix trie data structure
          for efficient generation of suggestions. The autocompletion is
          implemented as part of a REST API, which the front-end player search
          component fetches from.
        `,
        result: `
          Hockey Scrub is an app where users can very
          quickly and easily look up players and their stats, and the experience
          is snappy and satisfying. The UI has minimal clutter and is quite
          readable. The app is effective as a quick reference, and in the future I
          want to expand the number of stats it tracks. With React's modular
          nature, that should be pretty straightforward.
        `,
        link: "https://hockey-scrub.site"
      },
      {
        id: "css-minifier-popup",
        title: "css.minifier.rs",
        challenge: `
          I needed a fast and pleasant-to-use CSS
          minification tool to make my web development workflow more efficient.
        `,
        solution: `
          I built my own CSS minifier CLI tool using
          Rust and the Clap library. I implemented my own CSS parsing rules, and
          used Clap in conjunction with my own implementation for parsing standard in
          to build comprehensive parsing of user input.
        `,
        result: `
          This CSS minification tool is super faster than
          some common minification tools, compressing input in O(n) time (in contrast
          to regex-based methods, for example). The interface is simple, and app can
          minify user-specified files individually, or it can take input piped from
          another application and minify files based on that. The latter enables
          fast minification of large numbers of files with minimal user input.
        `,
        link: "https://github.com/amgarrett09/rust-css-minifier"
      },
      {
        id: "blog-popup",
        title: "alexgarrett.tech",
        challenge: `
          I needed a web-site and a blog to showcase
          the projects I'm working on. The blog app needed to allow me to easily
          create, edit, and publish posts, all while having good security.
        `,
        solution: `
          I built a blog app from the ground up with
          the help of the Django web framework. I learned about MVC-style web
          development, writing models to handle database entries, and using Python
          functions to serve the content to the user. I implemented forms for
          post-creation that have Markdown support, and on the back-end there is
          robust validation and HTML-escaping to prevent cross-site scripting and
          similar attacks.
        `,
        result: `
          The blog on alexgarrett.tech is fast and
          reliable application that has exactly the features I need without bloat.
          Additionally, the app is secure, preventing XSS and CSRF attacks. In the
          process of building it I also became quite familiar with Django and
          Python.
        `,
        link: "https://www.alexgarrett.tech/blog/"
      },
      {
        id: "audible-sights-popup",
        title: "Audible Sights",
        challenge: `
          I was fascinated by research on
          neuroplasticity which appeared to show that humans (and other animals)
          who lose their sight can learn to "see" with other senses. I wanted to
          create a web app that would illustrate how "seeing with sound" might
          work.
        `,
        solution: `
          I used vanilla JavaScript and the browser's
          Web Audio API to convert images to sound. Image brightness data is
          converted into gain values which are fed to numerous Web Audio
          oscillators. The gain data is updated by scanning images left to right.
          I used ES6 classes to make the image conversion its own module with a
          relatively simple API, and I used Webpack to compress the JavaScript
          files and to transpile them to an older version of JavaScript with more
          compatibility.
        `,
        result: `
          Audible Sights is a good proof of concept which
          shows how devices or apps which help the blind see with their ears could
          work. Users can try out the conversion on pre-set demo images, or upload
          their own images to experience what they sound like. The API for the
          image conversion itself is also easy-to-use and the image conversion
          module could be easily reused if the app's features were to be expanded.
        `,
        link: "https://audible-sights.herokuapp.com"
      }
    ]
  }
});
