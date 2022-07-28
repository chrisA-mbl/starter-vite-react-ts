# React project:
-Includes:
Vite | PNPM | MUI | Emotion | Redux | Redux RTK | postCSS for css deletion | Prettier and eslint configured | Linters | Typescript

# Getting started:
 Make sure that you have node > v14 installed
 - npm install -g pnpm
 - pnpm install


# Run the environment
- pnpm dev

# State of the application:
 1. Users can login to the experience using the AWS Cognito. (They need to create an account in order for that to work on the localhost page)
    a. Google was not connected but its quite easy to do so.
    b. (Maybe) There are expectations that it should work with microsoft SSO since they seem to be a major player
    c. You can add a logo to the login page.
    d. The user pool for the login page needs to be connected to the correct user pool on AWS that most people have already created accounts for. 
 2. Grafana needs to load after logging in.
    a. We have several email chat tickets open with Grafana was running into CORS issues when this was becoming necessary.
    b. The current work around is that the user needs to login to their instance of grafana like https://econoc.grafana.net, not grafana.com.
      a. Once you login to your instance of grafana, you will be able to view the grafana dashboards.
