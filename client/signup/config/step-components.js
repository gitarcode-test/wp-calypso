const stepNameToModuleName = {
	about: 'about',
	'clone-start': 'clone-start',
	'clone-destination': 'clone-destination',
	'clone-credentials': 'clone-credentials',
	'clone-point': 'clone-point',
	'clone-jetpack': 'clone-jetpack',
	'clone-ready': 'clone-ready',
	'clone-cloning': 'clone-cloning',
	'creds-confirm': 'creds-confirm',
	'creds-complete': 'creds-complete',
	'creds-permission': 'creds-permission',
	domains: 'domains',
	emails: 'emails',
	'domains-store': 'domains',
	'domain-only': 'domains',
	'domains-theme-preselected': 'domains',
	'domains-launch': 'domains',
	'from-url': 'import-url',
	'import-preview': 'import-preview',
	/* import-url will eventually replace from-url step. Forgive temporary naming. */
	'import-url': 'import-url-onboarding',
	'intent-screen': 'intent-screen',
	launch: 'launch-site',
	plans: 'plans',
	'plans-new': 'plans',
	'plans-business': 'plans',
	'plans-ecommerce': 'plans',
	'plans-import': 'plans',
	'plans-launch': 'plans',
	'plans-personal': 'plans',
	'plans-premium': 'plans',
	'plans-site-selected': 'plans',
	'plans-store-nux': 'plans-atomic-store',
	'select-domain': 'domains',
	site: 'site',
	'rebrand-cities-welcome': 'rebrand-cities-welcome',
	'rewind-migrate': 'rewind-migrate',
	'rewind-were-backing': 'rewind-were-backing',
	'rewind-form-creds': 'rewind-form-creds',
	'site-or-domain': 'site-or-domain',
	'site-picker': 'site-picker',
	'site-style': 'site-style',
	'site-title': 'site-title',
	'site-title-without-domains': 'site-title',
	'site-options': 'site-options',
	'site-topic': 'site-topic',
	'site-topic-with-theme': 'site-topic',
	'site-type': 'site-type',
	'site-type-with-theme': 'site-type',
	'starting-point': 'starting-point',
	survey: 'survey',
	'survey-user': 'survey-user',
	test: 'test-step',
	themes: 'theme-selection',
	'themes-site-selected': 'theme-selection',
	'template-first-themes': 'theme-selection',
	user: 'user',
	'user-new': 'user',
	'oauth2-user': 'user',
	'oauth2-name': 'user',
	displayname: 'user',
	'reader-landing': 'reader-landing',
	// Steps with preview
	'site-style-with-preview': 'site-style',
	'site-topic-with-preview': 'site-topic',
	'domains-with-preview': 'domains',
	'site-title-with-preview': 'site-title',
	passwordless: 'passwordless',
	'p2-details': 'p2-details',
	'p2-site': 'p2-site',
	'plans-business-monthly': 'plans',
	'plans-ecommerce-monthly': 'plans',
	'plans-personal-monthly': 'plans',
	'plans-premium-monthly': 'plans',
	'design-setup-site': 'design-picker',
	'difm-design-setup-site': 'design-picker',
	'difm-design': 'difm-design-picker',
	'site-info-collection': 'site-info-collection',
	intent: 'intent',
	list: 'import',
	capture: 'import',
	ready: 'import',
	importing: 'import-from',
	confirm: 'woocommerce-install',
	transfer: 'woocommerce-install',
	install: 'woocommerce-install',
	complete: 'woocommerce-install',
};

export function getStepModuleName( stepName ) {
	return stepNameToModuleName[ stepName ] || '';
}

export async function getStepComponent( stepName ) {
	const moduleName = stepNameToModuleName[ stepName ];
	const module = await import(
		/* webpackChunkName: "async-load-signup-steps-[request]", webpackInclude: /signup\/steps\/[0-9a-z-]+\/index.[j|t]sx$/ */ `calypso/signup/steps/${ moduleName }`
	);
	return module.default;
}
