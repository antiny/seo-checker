This is a sample program to check a HTML file for SEO defects.

**Basic usage**
```
const seoChecker = require("sample-seo-checker");
seoChecker.check('./sample.html');
```

**Custom rule**
User can define new custom rule. Each rule expects an input which is dom, loaded via `cheerio`.
It would return `util.success` if the rule passes for the given HTML document.
In case the rule fails, it would return and error message.
```
const seoChecker = require("sample-seo-checker");
const util       = seoChecker.util;

const rule = (dom) => {
    if (util.countTags(dom, "head meta[name=robots]") > 0) {
        return util.success;
    }
    return util.error('robots meta tag not found');
};

const rules = [rule];
seoChecker.check('./sample.html', rules, console);
```

**Predefined rules**
Predefined rules can be accessed at `seoChecker.rules` as a hash or `seoChecker.defaultRules` as an array. 

For other usage, please take a look at the test folder.