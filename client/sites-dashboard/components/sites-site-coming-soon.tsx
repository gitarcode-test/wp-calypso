import styled from '@emotion/styled';
import { __ } from '@wordpress/i18n';

type Props = {
	siteName?: string;
	className?: string;
	lang?: string;
	width: number;
	height: number;
};

const Root = styled.div( {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#117ac9',
	borderRadius: 4,
	boxSizing: 'content-box',
	border: '1px solid rgb(238, 238, 238)',
	position: 'relative',
	overflow: 'hidden',
} );

const comingSoonTranslations: Record< string, string > = {
	ar: 'قريبًا',
	de: 'Demnächst verfügbar',
	es: 'Próximamente',
	fr: 'Bientôt disponible',
	he: 'בקרוב',
	id: 'Segera hadir',
	it: 'Presto disponibile',
	ja: '近日公開',
	ko: '공개 예정',
	nb: 'Kommer snart',
	nl: 'Komt binnenkort',
	pt: 'Em breve',
	ro: 'În curând',
	ru: 'Скоро будет',
	skr: 'جلدی آندا پئے',
	sv: 'Kommer snart',
	tr: 'Pek yakında',
	zh: '即将推出',
};

const getTranslation = ( lang?: string ) => {
	let text = __( 'Coming Soon' );
	if ( lang ) {
		lang = lang.split( '-' )[ 0 ];
		if ( comingSoonTranslations[ lang ] ) {
			text = comingSoonTranslations[ lang ];
		}
	}
	return text;
};

export const SiteComingSoon = ( { siteName = '', className, lang, width, height }: Props ) => {
	const comingSoon = getTranslation( lang );
	return (
		<Root className={ className }>
			<svg
				width={ width }
				height={ height }
				viewBox="0 0 375 272"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>{ comingSoon }</title>
				<text
					fill="white"
					fontFamily="Recoleta, Georgia, 'Times New Roman', Times, serif"
					fontSize="30"
				>
					<tspan x="31" y="153.016">
						{ comingSoon }
					</tspan>
				</text>
				<text
					fill="white"
					fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif'
					fontSize="14"
				>
					<tspan x="31" y="120.102">
						{ siteName }
					</tspan>
				</text>
			</svg>
		</Root>
	);
};
