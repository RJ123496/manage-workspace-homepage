# Testing Infrastructure Setup Guide

## 🚀 Quick Start

This guide will help you set up the comprehensive testing infrastructure for your React + Tailwind CSS website.

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Modern web browser

## 🛠️ Installation

### 1. Install Dependencies

```bash
# Install all dependencies including testing tools
npm install

# Install Playwright browsers
npx playwright install
```

### 2. Environment Setup

```bash
# Copy environment variables
cp .env.example .env.local

# Set up your environment variables
# Add your API keys, analytics IDs, etc.
```

## 🧪 Test Categories & Setup

### 1. Unit Testing (Jest + React Testing Library)

**Configuration**: `jest.config.js`

```bash
# Run unit tests
npm run test:unit

# Run tests in watch mode
npm test

# Generate coverage report
npm run test:unit -- --coverage
```

**Coverage Targets**:
- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

### 2. End-to-End Testing (Playwright)

**Configuration**: `playwright.config.js`

```bash
# Run E2E tests
npm run test:e2e

# Run tests on specific browser
npx playwright test --project=chromium

# Run tests in headed mode
npx playwright test --headed

# Generate test report
npx playwright show-report
```

**Supported Browsers**:
- Chrome/Chromium
- Firefox
- Safari/WebKit
- Edge
- Mobile Chrome
- Mobile Safari

### 3. Performance Testing (Lighthouse CI)

**Configuration**: `lighthouse-ci.json`, `lighthouse-budget.json`

```bash
# Run performance tests
npm run test:performance

# Run with custom budget
npm run test:performance:budget

# Generate Lighthouse report
npm run test:lighthouse
```

**Performance Targets**:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

### 4. Accessibility Testing (axe-core + Pa11y)

**Configuration**: `.axe-config.json`

```bash
# Run accessibility tests
npm run test:a11y

# Run Pa11y tests
npm run test:pa11y

# Run accessibility E2E tests
npm run test:accessibility
```

**Accessibility Standards**:
- WCAG 2.1 AA compliance
- Color contrast ratios
- Keyboard navigation
- Screen reader compatibility

### 5. Responsive Design Testing

```bash
# Run responsive tests
npm run test:responsive

# Test specific viewport
npx playwright test tests/responsive.spec.js --project="Mobile Chrome"
```

**Tested Viewports**:
- 320px (small mobile)
- 375px (medium mobile)
- 414px (large mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1440px (medium desktop)
- 1920px (large desktop)

### 6. Bundle Analysis

```bash
# Analyze bundle size
npm run build:analyze

# Generate static report
npm run test:bundle-size

# Serve bundle analyzer
npm run build:analyze-serve
```

**Bundle Targets**:
- Initial bundle: < 300KB (gzipped)
- Total bundle: < 1MB
- No duplicate dependencies

### 7. Security Testing

```bash
# Run security audit
npm run audit:security

# Run Snyk scan (requires SNYK_TOKEN)
npm run audit:security
```

**Security Requirements**:
- No critical vulnerabilities
- Dependencies up to date
- CSP headers configured
- HTTPS enforcement

### 8. Code Quality

```bash
# Run ESLint
npm run lint

# Run Prettier check
npm run format:check

# Run CSS linting
npm run lint:css

# Fix formatting issues
npm run format

# Fix CSS issues
npm run lint:css:fix
```

## 🔧 Configuration Files

### Jest Configuration (`jest.config.js`)
- Test environment: jsdom
- Coverage thresholds: 80%
- Transformers for JSX and CSS
- Module name mapping

### Playwright Configuration (`playwright.config.js`)
- Multiple browser support
- Parallel test execution
- Screenshot and video capture
- Custom test timeouts

### Lighthouse CI (`lighthouse-ci.json`)
- Performance budgets
- Accessibility requirements
- SEO standards
- Best practices

### Stylelint Configuration (`.stylelintrc.json`)
- CSS property ordering
- Tailwind CSS support
- Accessibility rules
- Custom utilities

### Prettier Configuration (`.prettierrc`)
- Code formatting rules
- Line length limits
- Quote preferences
- Semicolon usage

## 🚀 CI/CD Pipeline

### GitHub Actions (`.github/workflows/test-suite.yml`)

The pipeline includes:

1. **Setup**: Dependency installation and caching
2. **Lint**: Code quality checks
3. **Test Unit**: Unit tests with coverage
4. **Build**: Production build verification
5. **Security**: Vulnerability scanning
6. **Performance**: Lighthouse CI testing
7. **Accessibility**: A11Y compliance checks
8. **E2E**: Cross-browser testing
9. **Bundle Size**: Size regression monitoring
10. **Deploy**: Staging and production deployment

### Environment Variables

Set these in your GitHub repository secrets:

```bash
SNYK_TOKEN=your_snyk_token
DEPLOY_KEY=your_deploy_key
ANALYTICS_ID=your_analytics_id
```

## 📊 Monitoring & Analytics

### Performance Monitoring

```bash
# Set up performance monitoring
npm run monitor:performance

# Configure Real User Monitoring (RUM)
# Add to your main component
```

### Error Tracking

```bash
# Set up Sentry (example)
npm install @sentry/react @sentry/tracing

# Configure in your app
```

### Analytics

```bash
# Set up Google Analytics 4
# Add tracking code to index.html
```

## 🧪 Running Tests Locally

### Complete Test Suite

```bash
# Run all tests
npm run test:all

# This includes:
# - Unit tests
# - E2E tests
# - Performance tests
# - Accessibility tests
```

### Individual Test Categories

```bash
# Unit tests only
npm run test:unit

# E2E tests only
npm run test:e2e

# Performance tests only
npm run test:performance

# Accessibility tests only
npm run test:a11y

# Responsive tests only
npm run test:responsive
```

### Development Workflow

```bash
# Start development server
npm start

# Run tests in watch mode
npm test

# Run E2E tests against dev server
npm run test:e2e

# Check code quality
npm run lint && npm run format:check
```

## 🔍 Debugging Tests

### Unit Tests

```bash
# Debug specific test
npm test -- --testNamePattern="should display hero section"

# Run with verbose output
npm test -- --verbose

# Debug with Node inspector
node --inspect-brk node_modules/.bin/jest --runInBand
```

### E2E Tests

```bash
# Run tests in headed mode
npx playwright test --headed

# Debug specific test
npx playwright test --grep "should load homepage"

# Show test traces
npx playwright show-trace trace.zip
```

### Performance Tests

```bash
# Run Lighthouse manually
npx lighthouse http://localhost:3000 --output=json

# Debug performance issues
npx lighthouse http://localhost:3000 --output=html --view
```

## 📈 Test Reports

### Coverage Reports

```bash
# Generate coverage report
npm run test:unit -- --coverage

# View coverage in browser
open coverage/lcov-report/index.html
```

### E2E Reports

```bash
# Generate HTML report
npx playwright show-report

# Generate JUnit report
npx playwright test --reporter=junit
```

### Performance Reports

```bash
# View Lighthouse results
open .lighthouseci/lhr/

# Generate performance budget report
npm run test:performance:budget
```

## 🚨 Troubleshooting

### Common Issues

1. **Playwright browsers not installed**
   ```bash
   npx playwright install
   ```

2. **Lighthouse CI failing**
   ```bash
   # Check if server is running
   npm run serve:build
   
   # Run manually
   npx lighthouse http://localhost:3000
   ```

3. **Bundle analyzer not working**
   ```bash
   # Ensure build exists
   npm run build
   
   # Run analyzer
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

4. **Accessibility tests failing**
   ```bash
   # Check axe configuration
   cat .axe-config.json
   
   # Run manually
   npx axe http://localhost:3000
   ```

### Performance Issues

1. **Slow test execution**
   - Use parallel execution
   - Optimize test setup
   - Use test sharding

2. **Memory leaks**
   - Check for unmounted components
   - Clear intervals and timeouts
   - Use React DevTools profiler

3. **Bundle size issues**
   - Analyze with webpack-bundle-analyzer
   - Check for duplicate dependencies
   - Implement code splitting

## 📚 Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tailwind CSS Testing](https://tailwindcss.com/docs/guides/testing)

## 🤝 Contributing

When adding new tests:

1. Follow the existing test structure
2. Add appropriate test IDs
3. Include accessibility considerations
4. Test across multiple viewports
5. Update documentation
6. Ensure CI pipeline passes

## 📞 Support

For issues with the testing infrastructure:

1. Check the troubleshooting section
2. Review test logs and reports
3. Consult the documentation
4. Create an issue with detailed information

---

**Happy Testing! 🧪✨** 