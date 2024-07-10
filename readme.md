# Example Repo for testing `.only()` issue

## Getting started
```
# install deps
npm i
```

### Run all specs with the `.only()` in parts.spec.js 
This is expected to run all cypress specs (expected to have 8, and as two separate specs)
npx cypress run

### Run only parts-dimensions-table.spec.js
This is expected to have 6 tests run (and as two separate specs)
`npx cypress run --spec "/integration/components/data-grid/part-dimensions-table.spec.ts`

### Removing `.only()` from "parts.spec.js"
This is expected to have 6 tests, but still as separate specs 
#### See line 11 after removing both `.only()` from "parts.spec.js"