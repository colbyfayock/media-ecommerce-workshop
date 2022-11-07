# 📓 Lesson 05: Create a new GitHub repository and link local project

[GitHub](https://github.com/) (where you might be looking at this from) is a web platform that gives developers the ability to utilize version control system Git in a more "social" and collaborative way. On top of that, it has loads of other features like my favorite [Actions](https://www.youtube.com/colbz/search?query=github%20actions) and even [Codespaces](https://github.com/features/codespaces)!

As developers, it's probably one of the most foundational tools we can learn, as Git (and GitHub) make working with teams a much better experience, not to mention an easier way to store and keep multiple versions of your code instead of an endless supply of ZIP files.

## What to Expect

For this workshop, we'll ultimately be deploying our application to [Netlify](https://www.netlify.com/) and while there are a variety of ways we can do that, we're going to take advantage of Netlify's ability to integrate with a GitHub repository to automate building and deploying the project any time changes are pushed.

So in this lesson, we'll use GitHub to create a new repository, learn how to set up our new project with that repository, and push out our code so that it's hosted and version controlled on GitHub.

## Objectives
* Create a new GitHub repository
* Connect a local repository to GitHub

## Exercises

### 1. Creating a new GitHub repository

Creating a new repository only really requires one thing — a name! But we also have a few other options such as if we want that repository to be public or private.

When creating the repository, we have the option to do so with the [GitHub CLI](https://cli.github.com/), but we can also use the GitHub web UI which is what we'll follow along with here.

#### Getting Started

Log in to your GitHub account and create a new repository.

You'll be prompted so select which account you want to use, the project name, and whether you'd like the project to be public or not (your choice).

> 💡 Tip: Make sure _not_ to initialize the repository with any files as we'll be adding a local project.

#### Resources
* [Creating a new repository - GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

### 2. Configure local project to push code to Github repository

Once we have a new repository, we need to ultimately put some code in it!

While sometimes starting from scratch is an option, we already have some code, but its currently located on our local environment.

#### Getting Started

Once you created your new repository, GitHub will provide you with instructions for how to add your local project which you can simply copy and paste into your terminal.

Ultimately you want to update your `origin`:

```
git remote add origin git@github.com:<Your Username>/<Your Repository Name>.git
```

Then push your changes to that origin:

```
git push -u origin main
```

#### Resources
* [Adding an existing project to GitHub using the command line](https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line)

## Next Lesson

[06 - Connect and deploy project from GitHub to Netlify](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/06%20-%20Connect%20and%20deploy%20project%20from%20GitHub%20to%20Netlify.md)
