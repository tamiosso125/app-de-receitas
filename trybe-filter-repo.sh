[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path cypress \
    --path pull-request-para-branch-do-grupo.png \
    --path only-all-green.png \
    --path describe-only.png \
    --path cypress.json \
    --path README.md \
    --invert-paths --force