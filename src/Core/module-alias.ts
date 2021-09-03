import moduleAlias from 'module-alias';

moduleAlias.addAliases({
    '@Core': __dirname + '/../Core',
    '@Presentation': __dirname + '/../Presentation',
    '@Domain': __dirname + '/../Domain',
    '@Data': __dirname + '/../Data',
    '@Services': __dirname + '/../Services',
    '@Workers': __dirname + '/../Workers',
    '@Infra': __dirname + '/../Infra',
    '@Test': __dirname + '/../test'
});
