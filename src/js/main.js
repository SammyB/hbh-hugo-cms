// Import Simpla and OAuth adapter
import Simpla from 'simpla';
import SimplaNetlify from 'simpla/adapters/netlify';
/**
 * main.js
 * Entrypoint for webpack
 */
import ready from './utils/ready';
import registerServiceWorker from './utils/serviceWorker';
import { info } from './utils/debug';

function onReady(e) {
  registerServiceWorker();
  info(`Event: ${e.type}`, `Datestamp: ${this.date}`);

  // Init Simpla
  Simpla.init({

    // Github repo to store content in
    repo: 'SammyB/hbh-hugo-cms',

    // Adapter to authenticate users with Github
    auth: new SimplaNetlify({ site: 'mysite' }),

    // Public URL of your content (optional)
    source: 'https://wizardly-einstein-672d89.netlify.com',

    /**
     * Commit branch (optional)
     * Git branch Simpla commits new content to, defaults to 'master'
     * Change this in development to make non-production changes
     */
    branch: 'master',

    /**
     * Public directory (optional)
     * Base directory to store Simpla's '_content' folder
     * Defaults to the root of the repo
     */
    public: 'dist',
  });

  // Add Simpla to window global for components to access
  window.Simpla = Simpla;

  // // Prompt for login from auth adapter
  // Simpla.login();
  //
  // // Log user out locally
  // Simpla.logout();
}

ready(onReady, {
  date: new Date(),
});
