import dotenv from 'dotenv';

dotenv.config();

module.exports = {
	development: {
		use_env_variable: 'DEV_DATABASE_URL',
	},
	staging: {
		use_env_variable: 'STAGING_DATABASE_URL',
	},
	local: {
		use_env_variable: 'LOCAL_DATABASE_URL',
	},
	test: {
		use_env_variable: 'TEST_DATABASE_URL',
	},
	production: {
		use_env_variable: 'PRODUCTION_DATABASE_URL',
	},
};
