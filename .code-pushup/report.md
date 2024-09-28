# Code PushUp Report

| 🏷 Category                       |  ⭐ Score   | 🛡 Audits |
| :-------------------------------- | :--------: | :-------: |
| [Bug prevention](#bug-prevention) | 🟢 **100** |    47     |
| [Code style](#code-style)         | 🟢 **97**  |    61     |

## 🏷 Categories

### Bug prevention

Lint rules that find **potential bugs** in your code.

🟢 Score: **100**

- 🟢 Problems (_ESLint_)
  - 🟩 [Disallow `require` statements except in import statements](#disallow-require-statements-except-in-import-statements-eslint) - **passed**
  - 🟩 [Disallow assignment operators in conditional expressions](#disallow-assignment-operators-in-conditional-expressions-eslint) - **passed**
  - 🟩 [Disallow assignments where both sides are exactly the same](#disallow-assignments-where-both-sides-are-exactly-the-same-eslint) - **passed**
  - 🟩 [Disallow calling some `Object.prototype` methods directly on objects](#disallow-calling-some-objectprototype-methods-directly-on-objects-eslint) - **passed**
  - 🟩 [Disallow characters which are made with multiple code points in character class syntax](#disallow-characters-which-are-made-with-multiple-code-points-in-character-class-syntax-eslint) - **passed**
  - 🟩 [Disallow comparing against -0](#disallow-comparing-against--0-eslint) - **passed**
  - 🟩 [Disallow conditional logic in tests](#disallow-conditional-logic-in-tests-eslint) - **passed**
  - 🟩 [Disallow constant expressions in conditions](#disallow-constant-expressions-in-conditions-eslint) - **passed**
  - 🟩 [Disallow control characters in regular expressions](#disallow-control-characters-in-regular-expressions-eslint) - **passed**
  - 🟩 [Disallow control flow statements in `finally` blocks](#disallow-control-flow-statements-in-finally-blocks-eslint) - **passed**
  - 🟩 [Disallow duplicate case labels](#disallow-duplicate-case-labels-eslint) - **passed**
  - 🟩 [Disallow duplicate conditions in if-else-if chains](#disallow-duplicate-conditions-in-if-else-if-chains-eslint) - **passed**
  - 🟩 [Disallow duplicate enum member values](#disallow-duplicate-enum-member-values-eslint) - **passed**
  - 🟩 [Disallow empty character classes in regular expressions](#disallow-empty-character-classes-in-regular-expressions-eslint) - **passed**
  - 🟩 [Disallow empty destructuring patterns](#disallow-empty-destructuring-patterns-eslint) - **passed**
  - 🟩 [Disallow extra non-null assertions](#disallow-extra-non-null-assertions-eslint) - **passed**
  - 🟩 [Disallow fallthrough of `case` statements](#disallow-fallthrough-of-case-statements-eslint) - **passed**
  - 🟩 [Disallow invalid regular expression strings in `RegExp` constructors](#disallow-invalid-regular-expression-strings-in-regexp-constructors-eslint) - **passed**
  - 🟩 [Disallow irregular whitespace](#disallow-irregular-whitespace-eslint) - **passed**
  - 🟩 [Disallow literal numbers that lose precision](#disallow-literal-numbers-that-lose-precision-eslint) - **passed**
  - 🟩 [Disallow nested `test.step()` methods](#disallow-nested-teststep-methods-eslint) - **passed**
  - 🟩 [Disallow non-null assertions after an optional chain expression](#disallow-non-null-assertions-after-an-optional-chain-expression-eslint) - **passed**
  - 🟩 [Disallow non-null assertions using the `!` postfix operator](#disallow-non-null-assertions-using-the--postfix-operator-eslint) - **passed**
  - 🟩 [Disallow reassigning class members](#disallow-reassigning-class-members-eslint) - **passed**
  - 🟩 [Disallow reassigning exceptions in `catch` clauses](#disallow-reassigning-exceptions-in-catch-clauses-eslint) - **passed**
  - 🟩 [Disallow sparse arrays](#disallow-sparse-arrays-eslint) - **passed**
  - 🟩 [Disallow the use of `debugger`](#disallow-the-use-of-debugger-eslint) - **passed**
  - 🟩 [Disallow unnecessary awaits for Playwright methods](#disallow-unnecessary-awaits-for-playwright-methods-eslint) - **passed**
  - 🟩 [Disallow unsafe declaration merging](#disallow-unsafe-declaration-merging-eslint) - **passed**
  - 🟩 [Disallow unused variables](#disallow-unused-variables-eslint) - **passed**
  - 🟩 [Disallow usage of 'not' matchers when a more specific matcher exists](#disallow-usage-of-not-matchers-when-a-more-specific-matcher-exists-eslint) - **passed**
  - 🟩 [Disallow use of optional chaining in contexts where the `undefined` value is not allowed](#disallow-use-of-optional-chaining-in-contexts-where-the-undefined-value-is-not-allowed-eslint) - **passed**
  - 🟩 [Disallow useless backreferences in regular expressions](#disallow-useless-backreferences-in-regular-expressions-eslint) - **passed**
  - 🟩 [Disallow using an async function as a Promise executor](#disallow-using-an-async-function-as-a-promise-executor-eslint) - **passed**
  - 🟩 [Disallow variable or `function` declarations in nested blocks](#disallow-variable-or-function-declarations-in-nested-blocks-eslint) - **passed**
  - 🟩 [Enforce "for" loop update clause moving the counter in the right direction](#enforce-for-loop-update-clause-moving-the-counter-in-the-right-direction-eslint) - **passed**
  - 🟩 [Enforce assertion to be made in a test body](#enforce-assertion-to-be-made-in-a-test-body-eslint) - **passed**
  - 🟩 [Enforce comparing `typeof` expressions against valid strings](#enforce-comparing-typeof-expressions-against-valid-strings-eslint) - **passed**
  - 🟩 [Enforce valid `expect()` usage](#enforce-valid-expect-usage-eslint) - **passed**
  - 🟩 [Enforce valid definition of `new` and `constructor`](#enforce-valid-definition-of-new-and-constructor-eslint) - **passed**
  - 🟩 [Ensures that lifecycle methods are used in a correct context](#ensures-that-lifecycle-methods-are-used-in-a-correct-context-eslint) - **passed**
  - 🟩 [Identify false positives when async Playwright APIs are not properly awaited.](#identify-false-positives-when-async-playwright-apis-are-not-properly-awaited-eslint) - **passed**
  - 🟩 [Prevent usage of `.only()` focus test annotation](#prevent-usage-of-only-focus-test-annotation-eslint) - **passed**
  - 🟩 [Prevent usage of page.pause()](#prevent-usage-of-pagepause-eslint) - **passed**
  - 🟩 [Prevent usage of the networkidle option](#prevent-usage-of-the-networkidle-option-eslint) - **passed**
  - 🟩 [Require calls to `isNaN()` when checking for `NaN`](#require-calls-to-isnan-when-checking-for-nan-eslint) - **passed**
  - 🟩 [The use of `page.$eval` and `page.$$eval` are discouraged, use `locator.evaluate` or `locator.evaluateAll` instead](#the-use-of-pageeval-and-pageeval-are-discouraged-use-locatorevaluate-or-locatorevaluateall-instead-eslint) - **passed**

### Code style

Lint rules that promote **good practices** and consistency in your code.

🟢 Score: **97**

- 🟢 Suggestions (_ESLint_)
  - 🟥 [Ensure that module boundaries are respected within the monorepo](#ensure-that-module-boundaries-are-respected-within-the-monorepo-eslint) - **2 errors**
  - 🟥 [Disallow the `any` type](#disallow-the-any-type-eslint) - **1 warning**
  - 🟩 [Checks dependencies in project's package.json for version mismatches](#checks-dependencies-in-projects-packagejson-for-version-mismatches-eslint) - **passed**
  - 🟩 [Classes decorated with @Component must have suffix "Component" (or custom) in their name. See more at https://angular.dev/style-guide#style-02-03](#classes-decorated-with-component-must-have-suffix-component-or-custom-in-their-name-see-more-at-https--angulardev-style-guidestyle-02-03-eslint) - **passed**
  - 🟩 [Classes decorated with @Directive must have suffix "Directive" (or custom) in their name. See more at https://angular.dev/style-guide#style-02-03](#classes-decorated-with-directive-must-have-suffix-directive-or-custom-in-their-name-see-more-at-https--angulardev-style-guidestyle-02-03-eslint) - **passed**
  - 🟩 [Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
          and https://angular.dev/style-guide#style-05-03.](#component-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-07-https--angulardev-style-guidestyle-05-02-and-https--angulardev-style-guidestyle-05-03-eslint) - **passed**
  - 🟩 [Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
          and https://angular.dev/style-guide#style-05-03.](#component-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-07-https--angulardev-style-guidestyle-05-02-and-https--angulardev-style-guidestyle-05-03-eslint) - **passed**
  - 🟩 [Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
          and https://angular.dev/style-guide#style-05-03.](#component-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-07-https--angulardev-style-guidestyle-05-02-and-https--angulardev-style-guidestyle-05-03-eslint) - **passed**
  - 🟩 [Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
          and https://angular.dev/style-guide#style-05-03.](#component-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-07-https--angulardev-style-guidestyle-05-02-and-https--angulardev-style-guidestyle-05-03-eslint) - **passed**
  - 🟩 [Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08.](#directive-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-06-and-https--angulardev-style-guidestyle-02-08-eslint) - **passed**
  - 🟩 [Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08.](#directive-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-06-and-https--angulardev-style-guidestyle-02-08-eslint) - **passed**
  - 🟩 [Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08.](#directive-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-06-and-https--angulardev-style-guidestyle-02-08-eslint) - **passed**
  - 🟩 [Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08.](#directive-selectors-should-follow-given-naming-rules-see-more-at-https--angulardev-style-guidestyle-02-06-and-https--angulardev-style-guidestyle-02-08-eslint) - **passed**
  - 🟩 [Disallow `\8` and `\9` escape sequences in string literals](#disallow-8-and-9-escape-sequences-in-string-literals-eslint) - **passed**
  - 🟩 [Disallow `with` statements](#disallow-with-statements-eslint) - **passed**
  - 🟩 [Disallow aliasing `this`](#disallow-aliasing-this-eslint) - **passed**
  - 🟩 [Disallow assignments to native objects or read-only global variables](#disallow-assignments-to-native-objects-or-read-only-global-variables-eslint) - **passed**
  - 🟩 [Disallow certain triple slash directives in favor of ES6-style import declarations](#disallow-certain-triple-slash-directives-in-favor-of-es6-style-import-declarations-eslint) - **passed**
  - 🟩 [Disallow certain types](#disallow-certain-types-eslint) - **passed**
  - 🟩 [Disallow deleting variables](#disallow-deleting-variables-eslint) - **passed**
  - 🟩 [Disallow empty block statements](#disallow-empty-block-statements-eslint) - **passed**
  - 🟩 [Disallow empty functions](#disallow-empty-functions-eslint) - **passed**
  - 🟩 [Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean](#disallow-explicit-type-declarations-for-variables-or-parameters-initialized-to-a-number-string-or-boolean-eslint) - **passed**
  - 🟩 [Disallow generic `Array` constructors](#disallow-generic-array-constructors-eslint) - **passed**
  - 🟩 [Disallow identifiers from shadowing restricted names](#disallow-identifiers-from-shadowing-restricted-names-eslint) - **passed**
  - 🟩 [Disallow lexical declarations in case clauses](#disallow-lexical-declarations-in-case-clauses-eslint) - **passed**
  - 🟩 [Disallow multiple spaces in regular expressions](#disallow-multiple-spaces-in-regular-expressions-eslint) - **passed**
  - 🟩 [Disallow octal literals](#disallow-octal-literals-eslint) - **passed**
  - 🟩 [Disallow the declaration of empty interfaces](#disallow-the-declaration-of-empty-interfaces-eslint) - **passed**
  - 🟩 [Disallow TypeScript namespaces](#disallow-typescript-namespaces-eslint) - **passed**
  - 🟩 [Disallow unnecessary `catch` clauses](#disallow-unnecessary-catch-clauses-eslint) - **passed**
  - 🟩 [Disallow unnecessary boolean casts](#disallow-unnecessary-boolean-casts-eslint) - **passed**
  - 🟩 [Disallow unnecessary constraints on generic types](#disallow-unnecessary-constraints-on-generic-types-eslint) - **passed**
  - 🟩 [Disallow unnecessary escape characters](#disallow-unnecessary-escape-characters-eslint) - **passed**
  - 🟩 [Disallow unused labels](#disallow-unused-labels-eslint) - **passed**
  - 🟩 [Disallows declaring empty lifecycle methods](#disallows-declaring-empty-lifecycle-methods-eslint) - **passed**
  - 🟩 [Disallows usage of the `inputs` metadata property. See more at https://angular.dev/style-guide#style-05-12](#disallows-usage-of-the-inputs-metadata-property-see-more-at-https--angulardev-style-guidestyle-05-12-eslint) - **passed**
  - 🟩 [Disallows usage of the `outputs` metadata property. See more at https://angular.dev/style-guide#style-05-12](#disallows-usage-of-the-outputs-metadata-property-see-more-at-https--angulardev-style-guidestyle-05-12-eslint) - **passed**
  - 🟩 [Enforce the use of `as const` over literal type](#enforce-the-use-of-as-const-over-literal-type-eslint) - **passed**
  - 🟩 [Enforces a maximum depth to nested describe calls](#enforces-a-maximum-depth-to-nested-describe-calls-eslint) - **passed**
  - 🟩 [Ensures that `Pipes` implement `PipeTransform` interface](#ensures-that-pipes-implement-pipetransform-interface-eslint) - **passed**
  - 🟩 [Ensures that async pipe results, as well as values used with the async pipe, are not negated](#ensures-that-async-pipe-results-as-well-as-values-used-with-the-async-pipe-are-not-negated-eslint) - **passed**
  - 🟩 [Ensures that classes implement lifecycle interfaces corresponding to the declared lifecycle methods. See more at https://angular.dev/style-guide#style-09-01](#ensures-that-classes-implement-lifecycle-interfaces-corresponding-to-the-declared-lifecycle-methods-see-more-at-https--angulardev-style-guidestyle-09-01-eslint) - **passed**
  - 🟩 [Ensures that input bindings are not aliased](#ensures-that-input-bindings-are-not-aliased-eslint) - **passed**
  - 🟩 [Ensures that output bindings are not aliased](#ensures-that-output-bindings-are-not-aliased-eslint) - **passed**
  - 🟩 [Ensures that output bindings, including aliases, are not named "on", nor prefixed with it. See more at https://angular.dev/style-guide#style-05-16](#ensures-that-output-bindings-including-aliases-are-not-named-on-nor-prefixed-with-it-see-more-at-https--angulardev-style-guidestyle-05-16-eslint) - **passed**
  - 🟩 [Ensures that output bindings, including aliases, are not named as standard DOM events](#ensures-that-output-bindings-including-aliases-are-not-named-as-standard-dom-events-eslint) - **passed**
  - 🟩 [Ensures that the two-way data binding syntax is correct](#ensures-that-the-two-way-data-binding-syntax-is-correct-eslint) - **passed**
  - 🟩 [Prefer web first assertions](#prefer-web-first-assertions-eslint) - **passed**
  - 🟩 [Prevent usage of `{ force: true }` option.](#prevent-usage-of--force-true--option-eslint) - **passed**
  - 🟩 [Prevent usage of page.waitForTimeout()](#prevent-usage-of-pagewaitfortimeout-eslint) - **passed**
  - 🟩 [Prevent usage of the `.skip()` skip test annotation.](#prevent-usage-of-the-skip-skip-test-annotation-eslint) - **passed**
  - 🟩 [Require `const` declarations for variables that are never reassigned after declared](#require-const-declarations-for-variables-that-are-never-reassigned-after-declared-eslint) - **passed**
  - 🟩 [Require `let` or `const` instead of `var`](#require-let-or-const-instead-of-var-eslint) - **passed**
  - 🟩 [Require generator functions to contain `yield`](#require-generator-functions-to-contain-yield-eslint) - **passed**
  - 🟩 [Require rest parameters instead of `arguments`](#require-rest-parameters-instead-of-arguments-eslint) - **passed**
  - 🟩 [Require spread operators instead of `.apply()`](#require-spread-operators-instead-of-apply-eslint) - **passed**
  - 🟩 [Require that function overload signatures be consecutive](#require-that-function-overload-signatures-be-consecutive-eslint) - **passed**
  - 🟩 [Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules](#require-using-namespace-keyword-over-module-keyword-to-declare-custom-typescript-modules-eslint) - **passed**
  - 🟩 [Requires `===` and `!==` in place of `==` and `!=`](#requires--and--in-place-of--and--eslint) - **passed**
  - 🟩 [The use of ElementHandle is discouraged, use Locator instead](#the-use-of-elementhandle-is-discouraged-use-locator-instead-eslint) - **passed**

## 🛡️ Audits

### Ensure that module boundaries are respected within the monorepo (ESLint)

<details>
<summary>🟥 <b>2 errors</b> (score: 0)</summary>

#### Issues

|  Severity  | Message                                                                                                      | Source file                                                              | Line(s) |
| :--------: | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- | :-----: |
| 🚨 _error_ | A project tagged with "type:data-access" can only depend on libs tagged with "type:data-access", "type:util" | `libs/characters/src/lib/data-access/src/lib/state/characters.facade.ts` |   24    |
| 🚨 _error_ | A project tagged with "type:data-access" can only depend on libs tagged with "type:data-access", "type:util" | `libs/characters/src/lib/data-access/src/lib/state/characters.facade.ts` |   24    |

</details>

ESLint rule **enforce-module-boundaries**, from _@nx_ plugin.

Custom options:

```json
{
  "enforceBuildableLibDependency": true,
  "allow": [],
  "depConstraints": [
    {
      "sourceTag": "type:app",
      "onlyDependOnLibsWithTags": [
        "type:shell",
        "type:feature",
        "type:ui",
        "type:data-access",
        "type:util"
      ]
    },
    {
      "sourceTag": "type:shell",
      "onlyDependOnLibsWithTags": [
        "type:feature",
        "type:ui",
        "type:data-access",
        "type:util"
      ]
    },
    {
      "sourceTag": "type:feature",
      "onlyDependOnLibsWithTags": [
        "type:feature",
        "type:ui",
        "type:data-access",
        "type:util"
      ]
    },
    {
      "sourceTag": "type:ui",
      "onlyDependOnLibsWithTags": [
        "type:data-access",
        "type:ui",
        "type:util"
      ]
    },
    {
      "sourceTag": "type:data-access",
      "onlyDependOnLibsWithTags": [
        "type:data-access",
        "type:util"
      ]
    },
    {
      "sourceTag": "type:util",
      "onlyDependOnLibsWithTags": [
        "type:util"
      ]
    },
    {
      "sourceTag": "domain:app",
      "onlyDependOnLibsWithTags": [
        "*"
      ]
    },
    {
      "sourceTag": "domain:characters",
      "onlyDependOnLibsWithTags": [
        "domain:characters",
        "domain:shared"
      ]
    },
    {
      "sourceTag": "domain:shared",
      "onlyDependOnLibsWithTags": [
        "domain:shared"
      ]
    }
  ]
}
```

[📖 Docs](https://github.com/nrwl/nx/blob/19.6.2/docs/generated/packages/eslint-plugin/documents/enforce-module-boundaries.md)

### Disallow the `any` type (ESLint)

<details>
<summary>🟥 <b>1 warning</b> (score: 0)</summary>

#### Issues

|   Severity   | Message                                   | Source file                                                                       | Line(s) |
| :----------: | :---------------------------------------- | :-------------------------------------------------------------------------------- | :-----: |
| ⚠️ _warning_ | Unexpected any. Specify a different type. | `libs/shared/ui/src/lib/template-modal/footer/template-modal-footer.component.ts` |   59    |

</details>

ESLint rule **no-explicit-any**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-explicit-any)

### Checks dependencies in project's package.json for version mismatches (ESLint)

🟩 **passed** (score: 100)

ESLint rule **dependency-checks**, from _@nx_ plugin. [📖 Docs](https://github.com/nrwl/nx/blob/19.6.2/docs/generated/packages/eslint-plugin/documents/dependency-checks.md)

### Classes decorated with @Component must have suffix "Component" (or custom) in their name. See more at https://angular.dev/style-guide#style-02-03 (ESLint)

🟩 **passed** (score: 100)

ESLint rule **component-class-suffix**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md)

### Classes decorated with @Directive must have suffix "Directive" (or custom) in their name. See more at https://angular.dev/style-guide#style-02-03 (ESLint)

🟩 **passed** (score: 100)

ESLint rule **directive-class-suffix**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-class-suffix.md)

### Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
      and https://angular.dev/style-guide#style-05-03. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **component-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "element",
  "prefix": "app",
  "style": "kebab-case"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md)

### Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
      and https://angular.dev/style-guide#style-05-03. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **component-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "element",
  "prefix": "characters",
  "style": "kebab-case"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md)

### Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
      and https://angular.dev/style-guide#style-05-03. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **component-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "element",
  "prefix": "shared",
  "style": "kebab-case"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md)

### Component selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-07, https://angular.dev/style-guide#style-05-02
      and https://angular.dev/style-guide#style-05-03. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **component-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "element",
  "prefix": "shared-util",
  "style": "kebab-case"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md)

### Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **directive-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "attribute",
  "prefix": "app",
  "style": "camelCase"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md)

### Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **directive-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "attribute",
  "prefix": "characters",
  "style": "camelCase"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md)

### Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **directive-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "attribute",
  "prefix": "shared",
  "style": "camelCase"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md)

### Directive selectors should follow given naming rules. See more at https://angular.dev/style-guide#style-02-06 and https://angular.dev/style-guide#style-02-08. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **directive-selector**, from _@angular-eslint_ plugin.

Custom options:

```json
{
  "type": "attribute",
  "prefix": "shared-util",
  "style": "camelCase"
}
```

[📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md)

### Disallow `\8` and `\9` escape sequences in string literals (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-nonoctal-decimal-escape**. [📖 Docs](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)

### Disallow `require` statements except in import statements (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-var-requires**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-var-requires)

### Disallow `with` statements (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-with**. [📖 Docs](https://eslint.org/docs/latest/rules/no-with)

### Disallow aliasing `this` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-this-alias**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-this-alias)

### Disallow assignment operators in conditional expressions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-cond-assign**. [📖 Docs](https://eslint.org/docs/latest/rules/no-cond-assign)

### Disallow assignments to native objects or read-only global variables (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-global-assign**. [📖 Docs](https://eslint.org/docs/latest/rules/no-global-assign)

### Disallow assignments where both sides are exactly the same (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-self-assign**. [📖 Docs](https://eslint.org/docs/latest/rules/no-self-assign)

### Disallow calling some `Object.prototype` methods directly on objects (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-prototype-builtins**. [📖 Docs](https://eslint.org/docs/latest/rules/no-prototype-builtins)

### Disallow certain triple slash directives in favor of ES6-style import declarations (ESLint)

🟩 **passed** (score: 100)

ESLint rule **triple-slash-reference**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/triple-slash-reference)

### Disallow certain types (ESLint)

🟩 **passed** (score: 100)

ESLint rule **ban-types**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/ban-types)

### Disallow characters which are made with multiple code points in character class syntax (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-misleading-character-class**. [📖 Docs](https://eslint.org/docs/latest/rules/no-misleading-character-class)

### Disallow comparing against -0 (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-compare-neg-zero**. [📖 Docs](https://eslint.org/docs/latest/rules/no-compare-neg-zero)

### Disallow conditional logic in tests (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-conditional-in-test**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-conditional-in-test.md)

### Disallow constant expressions in conditions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-constant-condition**. [📖 Docs](https://eslint.org/docs/latest/rules/no-constant-condition)

### Disallow control characters in regular expressions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-control-regex**. [📖 Docs](https://eslint.org/docs/latest/rules/no-control-regex)

### Disallow control flow statements in `finally` blocks (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-unsafe-finally**. [📖 Docs](https://eslint.org/docs/latest/rules/no-unsafe-finally)

### Disallow deleting variables (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-delete-var**. [📖 Docs](https://eslint.org/docs/latest/rules/no-delete-var)

### Disallow duplicate case labels (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-duplicate-case**. [📖 Docs](https://eslint.org/docs/latest/rules/no-duplicate-case)

### Disallow duplicate conditions in if-else-if chains (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-dupe-else-if**. [📖 Docs](https://eslint.org/docs/latest/rules/no-dupe-else-if)

### Disallow duplicate enum member values (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-duplicate-enum-values**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-duplicate-enum-values)

### Disallow empty block statements (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-empty**. [📖 Docs](https://eslint.org/docs/latest/rules/no-empty)

### Disallow empty character classes in regular expressions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-empty-character-class**. [📖 Docs](https://eslint.org/docs/latest/rules/no-empty-character-class)

### Disallow empty destructuring patterns (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-empty-pattern**. [📖 Docs](https://eslint.org/docs/latest/rules/no-empty-pattern)

### Disallow empty functions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-empty-function**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-empty-function)

### Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-inferrable-types**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-inferrable-types)

### Disallow extra non-null assertions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-extra-non-null-assertion**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-extra-non-null-assertion)

### Disallow fallthrough of `case` statements (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-fallthrough**. [📖 Docs](https://eslint.org/docs/latest/rules/no-fallthrough)

### Disallow generic `Array` constructors (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-array-constructor**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-array-constructor)

### Disallow identifiers from shadowing restricted names (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-shadow-restricted-names**. [📖 Docs](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)

### Disallow invalid regular expression strings in `RegExp` constructors (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-invalid-regexp**. [📖 Docs](https://eslint.org/docs/latest/rules/no-invalid-regexp)

### Disallow irregular whitespace (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-irregular-whitespace**. [📖 Docs](https://eslint.org/docs/latest/rules/no-irregular-whitespace)

### Disallow lexical declarations in case clauses (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-case-declarations**. [📖 Docs](https://eslint.org/docs/latest/rules/no-case-declarations)

### Disallow literal numbers that lose precision (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-loss-of-precision**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-loss-of-precision)

### Disallow multiple spaces in regular expressions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-regex-spaces**. [📖 Docs](https://eslint.org/docs/latest/rules/no-regex-spaces)

### Disallow nested `test.step()` methods (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-nested-step**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-nested-step.md)

### Disallow non-null assertions after an optional chain expression (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-non-null-asserted-optional-chain**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)

### Disallow non-null assertions using the `!` postfix operator (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-non-null-assertion**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-non-null-assertion)

### Disallow octal literals (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-octal**. [📖 Docs](https://eslint.org/docs/latest/rules/no-octal)

### Disallow reassigning class members (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-class-assign**. [📖 Docs](https://eslint.org/docs/latest/rules/no-class-assign)

### Disallow reassigning exceptions in `catch` clauses (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-ex-assign**. [📖 Docs](https://eslint.org/docs/latest/rules/no-ex-assign)

### Disallow sparse arrays (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-sparse-arrays**. [📖 Docs](https://eslint.org/docs/latest/rules/no-sparse-arrays)

### Disallow the declaration of empty interfaces (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-empty-interface**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-empty-interface)

### Disallow the use of `debugger` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-debugger**. [📖 Docs](https://eslint.org/docs/latest/rules/no-debugger)

### Disallow TypeScript namespaces (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-namespace**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-namespace)

### Disallow unnecessary `catch` clauses (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-useless-catch**. [📖 Docs](https://eslint.org/docs/latest/rules/no-useless-catch)

### Disallow unnecessary awaits for Playwright methods (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-useless-await**, from _playwright_ plugin.

### Disallow unnecessary boolean casts (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-extra-boolean-cast**. [📖 Docs](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)

### Disallow unnecessary constraints on generic types (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-unnecessary-type-constraint**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)

### Disallow unnecessary escape characters (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-useless-escape**. [📖 Docs](https://eslint.org/docs/latest/rules/no-useless-escape)

### Disallow unsafe declaration merging (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-unsafe-declaration-merging**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)

### Disallow unused labels (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-unused-labels**. [📖 Docs](https://eslint.org/docs/latest/rules/no-unused-labels)

### Disallow unused variables (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-unused-vars**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-unused-vars)

### Disallow usage of 'not' matchers when a more specific matcher exists (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-useless-not**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-useless-not.md)

### Disallow use of optional chaining in contexts where the `undefined` value is not allowed (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-unsafe-optional-chaining**. [📖 Docs](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)

### Disallow useless backreferences in regular expressions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-useless-backreference**. [📖 Docs](https://eslint.org/docs/latest/rules/no-useless-backreference)

### Disallow using an async function as a Promise executor (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-async-promise-executor**. [📖 Docs](https://eslint.org/docs/latest/rules/no-async-promise-executor)

### Disallow variable or `function` declarations in nested blocks (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-inner-declarations**. [📖 Docs](https://eslint.org/docs/latest/rules/no-inner-declarations)

### Disallows declaring empty lifecycle methods (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-empty-lifecycle-method**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md)

### Disallows usage of the `inputs` metadata property. See more at https://angular.dev/style-guide#style-05-12 (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-inputs-metadata-property**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inputs-metadata-property.md)

### Disallows usage of the `outputs` metadata property. See more at https://angular.dev/style-guide#style-05-12 (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-outputs-metadata-property**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-outputs-metadata-property.md)

### Enforce "for" loop update clause moving the counter in the right direction (ESLint)

🟩 **passed** (score: 100)

ESLint rule **for-direction**. [📖 Docs](https://eslint.org/docs/latest/rules/for-direction)

### Enforce assertion to be made in a test body (ESLint)

🟩 **passed** (score: 100)

ESLint rule **expect-expect**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/expect-expect.md)

### Enforce comparing `typeof` expressions against valid strings (ESLint)

🟩 **passed** (score: 100)

ESLint rule **valid-typeof**. [📖 Docs](https://eslint.org/docs/latest/rules/valid-typeof)

### Enforce the use of `as const` over literal type (ESLint)

🟩 **passed** (score: 100)

ESLint rule **prefer-as-const**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/prefer-as-const)

### Enforce valid `expect()` usage (ESLint)

🟩 **passed** (score: 100)

ESLint rule **valid-expect**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/valid-expect.md)

### Enforce valid definition of `new` and `constructor` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-misused-new**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/no-misused-new)

### Enforces a maximum depth to nested describe calls (ESLint)

🟩 **passed** (score: 100)

ESLint rule **max-nested-describe**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/max-nested-describe.md)

### Ensures that `Pipes` implement `PipeTransform` interface (ESLint)

🟩 **passed** (score: 100)

ESLint rule **use-pipe-transform-interface**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-pipe-transform-interface.md)

### Ensures that async pipe results, as well as values used with the async pipe, are not negated (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-negated-async**, from _@angular-eslint/template_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/no-negated-async.md)

### Ensures that classes implement lifecycle interfaces corresponding to the declared lifecycle methods. See more at https://angular.dev/style-guide#style-09-01 (ESLint)

🟩 **passed** (score: 100)

ESLint rule **use-lifecycle-interface**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-lifecycle-interface.md)

### Ensures that input bindings are not aliased (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-input-rename**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-input-rename.md)

### Ensures that lifecycle methods are used in a correct context (ESLint)

🟩 **passed** (score: 100)

ESLint rule **contextual-lifecycle**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/contextual-lifecycle.md)

### Ensures that output bindings are not aliased (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-output-rename**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-rename.md)

### Ensures that output bindings, including aliases, are not named "on", nor prefixed with it. See more at https://angular.dev/style-guide#style-05-16 (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-output-on-prefix**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md)

### Ensures that output bindings, including aliases, are not named as standard DOM events (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-output-native**, from _@angular-eslint_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-native.md)

### Ensures that the two-way data binding syntax is correct (ESLint)

🟩 **passed** (score: 100)

ESLint rule **banana-in-box**, from _@angular-eslint/template_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/banana-in-box.md)

### Identify false positives when async Playwright APIs are not properly awaited. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **missing-playwright-await**, from _playwright_ plugin.

### Prefer web first assertions (ESLint)

🟩 **passed** (score: 100)

ESLint rule **prefer-web-first-assertions**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-web-first-assertions.md)

### Prevent usage of `.only()` focus test annotation (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-focused-test**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-focused-test.md)

### Prevent usage of `{ force: true }` option. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-force-option**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-force-option.md)

### Prevent usage of page.pause() (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-page-pause**, from _playwright_ plugin.

### Prevent usage of page.waitForTimeout() (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-wait-for-timeout**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-wait-for-timeout.md)

### Prevent usage of the `.skip()` skip test annotation. (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-skipped-test**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-skipped-test.md)

### Prevent usage of the networkidle option (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-networkidle**, from _playwright_ plugin.

### Require `const` declarations for variables that are never reassigned after declared (ESLint)

🟩 **passed** (score: 100)

ESLint rule **prefer-const**. [📖 Docs](https://eslint.org/docs/latest/rules/prefer-const)

### Require `let` or `const` instead of `var` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-var**. [📖 Docs](https://eslint.org/docs/latest/rules/no-var)

### Require calls to `isNaN()` when checking for `NaN` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **use-isnan**. [📖 Docs](https://eslint.org/docs/latest/rules/use-isnan)

### Require generator functions to contain `yield` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **require-yield**. [📖 Docs](https://eslint.org/docs/latest/rules/require-yield)

### Require rest parameters instead of `arguments` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **prefer-rest-params**. [📖 Docs](https://eslint.org/docs/latest/rules/prefer-rest-params)

### Require spread operators instead of `.apply()` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **prefer-spread**. [📖 Docs](https://eslint.org/docs/latest/rules/prefer-spread)

### Require that function overload signatures be consecutive (ESLint)

🟩 **passed** (score: 100)

ESLint rule **adjacent-overload-signatures**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/adjacent-overload-signatures)

### Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules (ESLint)

🟩 **passed** (score: 100)

ESLint rule **prefer-namespace-keyword**, from _@typescript-eslint_ plugin. [📖 Docs](https://typescript-eslint.io/rules/prefer-namespace-keyword)

### Requires `===` and `!==` in place of `==` and `!=` (ESLint)

🟩 **passed** (score: 100)

ESLint rule **eqeqeq**, from _@angular-eslint/template_ plugin. [📖 Docs](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/eqeqeq.md)

### The use of `page.$eval` and `page.$$eval` are discouraged, use `locator.evaluate` or `locator.evaluateAll` instead (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-eval**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-eval.md)

### The use of ElementHandle is discouraged, use Locator instead (ESLint)

🟩 **passed** (score: 100)

ESLint rule **no-element-handle**, from _playwright_ plugin. [📖 Docs](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-element-handle.md)

## About

Report was created by [Code PushUp](https://github.com/code-pushup/cli#readme) on Sat, Sep 28, 2024, 3:00 PM GMT+2.

| Plugin | Audits | Version  | Duration |
| :----- | :----: | :------: | -------: |
| ESLint |  108   | `0.50.0` |  29.54 s |

| Commit                                                                     | Version  | Duration | Plugins | Categories | Audits |
| :------------------------------------------------------------------------- | :------: | -------: | :-----: | :--------: | :----: |
| ci(workspace): add code push-up (8e05605534754e8a5d2359c02d1c2da5c2fbefb9) | `0.50.0` |  29.58 s |    1    |     2      |  108   |

---

Made with ❤ by [Code PushUp](https://github.com/code-pushup/cli#readme)
