// http://docpad.org/docs/config

require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "Coop-in-a-Box is",
      description: "turnkey technology for cooperatives",
    },
  },
  detectEncoding: true,
  plugins: {
    handlebars: {
      helpers: {
        partial: function (content, options) {
          return this.partial(content, options);
        },
        block: function (blockName) {
          return this.getBlock(blockName).toHTML();
        },
      },
    },
    browserifybundles: {
      bundles: [{
        arguments: ['-t', 'uglifyify'],
        entry: 'scripts/index.js',
        out: 'scripts/bundle.js',
      }],
      environments: {
        development: {
          bundles: [{
            arguments: ['-d'],
            entry: 'scripts/index.js',
            out: 'scripts/bundle.js',
          }],
        },
      },
    },
    raw: {
      'font-awesome': {
        command: ['rsync', '-r', 'node_modules/font-awesome/fonts/', 'out/fonts'],
      },
      semantic: {
        command: ['rsync', '-r', 'node_modules/semantic/src/fonts/', 'out/fonts'],
      },
    },
    ghpages: {
      deployRemote: 'deploy',
      deployBranch: 'master',
    },
  },
  environments: {
    development: {
      port: 5000,
    },
  },
};
