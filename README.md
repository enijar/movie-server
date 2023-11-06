# 🍿 Movie Server

Watch movies in your browser.

![Screenshot](.github/misc/screenshot.png)

### Getting Started

```shell
cp app/.env.example app/.env
npm install
npm start # http://localhost:3000
```

### Notes

Movies will update every minute (unless the cron job is already running). The cron job for updating movies
is run from code inside the `cms` directory.

To set up an admin user in the CMS, visit http://localhost:1337/admin and follow the set-up steps.

When you're logged into the CMS as an admin, you can add a new app user [here](http://localhost:1337/admin/content-manager/collectionType/api::app-user.app-user?page=1&pageSize=10&sort=id:ASC).

Now you have an app user you can log in to the app [here](http://localhost:3000).
