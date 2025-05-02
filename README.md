<p align="center">
  <img src="https://kuldeep363.github.io/assets/finioai-banner.jpeg" alt="Finio AI Logo" width="200"/>
</p>

# Finio AI Website

This is the official frontend repository for the **Finio AI** platform.

> 🚀 Live: [finioai.com](https://finioai.com)  
> 🛠️ Dev: [dev-finioai.vercel.app](https://dev-finioai.vercel.app/)

---

## 📌 Tech Stack

| Area           | Technology                |
|----------------|---------------------------|
| Frontend       | [Next.js](https://nextjs.org/) (App Router) |
| Language       | [TypeScript](https://www.typescriptlang.org/) |
| Styling        | [Tailwind CSS](https://tailwindcss.com/)     |
| Icons          | [iconsax-react](https://iconsax-react.pages.dev/) |
| Hosting        | [Vercel](https://vercel.com/) |
| Versioning     | [release-please](https://github.com/googleapis/release-please) |

---

## 👨‍💻 Developers

| Name              | Role            | GitHub / Contact                  |
|-------------------|------------------|----------------------------------|
| Kuldeep Rawat     | Frontend Lead    | [@Kuldeep363](https://github.com/Kuldeep363) |


---

## 🚧 Environments

- **Development:**  
  https://dev-finioai.vercel.app/

- **Production:**  
  https://finioai.com

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run in development
npm run dev


# 📦 Release Workflow with Release Please & Jenkins

This project uses **Release Please** for automated semantic versioning and changelog generation, combined with **Jenkins CI/CD** for deployment.

---

## 🔁 Branch Strategy

| Branch | Purpose                          |
|--------|----------------------------------|
| `dev`  | Active development               |
| `master` | Production-ready code, triggers release & deployment |
| `feature/*` | Feature development (branch off `dev`) |
| `fix/*`     | Bug fixes (branch off `dev`)         |

---

## 🧑‍💻 Developer Guide

### 1. Start from the `dev` branch
```bash
git checkout dev
git pull origin dev
```

### 2. Create a new branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Commit using Conventional Commits
All commits **must** follow this format:

```
<type>(optional-scope): short description

optional body
```

#### Valid types:

| Type      | Purpose                          |
|-----------|----------------------------------|
| `feat`    | New feature                      |
| `fix`     | Bug fix                          |
| `docs`    | Documentation changes            |
| `chore`   | Maintenance, tooling, CI, etc.   |
| `refactor`| Code restructuring               |
| `test`    | Adding or updating tests         |
| `perf`    | Performance improvements         |

#### Examples:
```bash
git commit -m "feat(auth): add user login"
git commit -m "fix(video): handle null stream bug"
```

### 4. Push your branch
```bash
git push origin feature/your-feature-name
```

### 5. Open a PR to `dev`
- Ensure reviewers are tagged
- Title and description should be clear

---

## 🚀 Releasing to Production

Performed by maintainers or release managers:

### 1. Merge `dev` into `master`
```bash
git checkout master
git pull origin master
git merge dev
git push origin master
```

### 2. Jenkins will automatically:
- Run `release-please`
- Analyze commits and bump version (major/minor/patch)
- Update `CHANGELOG.md`
- Create a GitHub Release
- Trigger deployment

#### Sample Jenkins Stage:
```groovy
stage('Release Please') {
  when {
    branch 'master'
  }
  steps {
    sh 'npx release-please github-release --token=$GITHUB_TOKEN --repo-url=https://github.com/your-org/your-repo'
  }
}
```

---

## 📈 Version Rules

| Commits                       | Version bump |
|------------------------------|---------------|
| 3 `fix:`                     | patch (x.y.z → x.y.z+1) |
| 2 `feat:` + 1 `fix:`         | minor (x.y.z → x.y+1.0) |
| `BREAKING CHANGE:` in body   | major (x.y.z → x+1.0.0) |

---

## 📋 Notes
- Do **not** commit directly to `master`
- Only PRs to `dev` should be allowed for features/fixes
- Every `master` push = new version and deploy

---

## 📚 Resources
- [Release Please Docs](https://github.com/googleapis/release-please)
- [Conventional Commits](https://www.conventionalcommits.org)

For any setup issues, reach out to [Kuldeep Rawat](https://kuldeeprawat.com).



Made with ❤️ by the Finio AI Team