const defaultParserOptions = {
    ecmaVersion: 2018,
    ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
    },
};

const mapper = ({
    code,
    errors,
    options = [],
    parserOptions = {},
    settings,
}) => {
    return {
        code,
        errors,
        options,
        parserOptions: {
            ...defaultParserOptions,
            ...parserOptions,
        },
        settings,
    };
};

module.exports = {
    testMapper: mapper
}
