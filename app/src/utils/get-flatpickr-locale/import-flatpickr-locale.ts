export default function importFlatpickrLocale(locale: string): Promise<any> {
	switch (locale) {
		case 'ar':
			return import('flatpickr/dist/l10n/ar.js');
		case 'at':
			return import('flatpickr/dist/l10n/at.js');
		case 'az':
			return import('flatpickr/dist/l10n/az.js');
		case 'be':
			return import('flatpickr/dist/l10n/be.js');
		case 'bg':
			return import('flatpickr/dist/l10n/bg.js');
		case 'bn':
			return import('flatpickr/dist/l10n/bn.js');
		case 'bs':
			return import('flatpickr/dist/l10n/bs.js');
		case 'ca':
			return import('flatpickr/dist/l10n/cat.js');
		case 'cs':
			return import('flatpickr/dist/l10n/cs.js');
		case 'cy':
			return import('flatpickr/dist/l10n/cy.js');
		case 'da':
			return import('flatpickr/dist/l10n/da.js');
		case 'de':
			return import('flatpickr/dist/l10n/de.js');
		case 'en':
			return import('flatpickr/dist/l10n/default.js');
		case 'eo':
			return import('flatpickr/dist/l10n/eo.js');
		case 'es':
			return import('flatpickr/dist/l10n/es.js');
		case 'et':
			return import('flatpickr/dist/l10n/et.js');
		case 'fa':
			return import('flatpickr/dist/l10n/fa.js');
		case 'fi':
			return import('flatpickr/dist/l10n/fi.js');
		case 'fo':
			return import('flatpickr/dist/l10n/fo.js');
		case 'fr':
			return import('flatpickr/dist/l10n/fr.js');
		case 'ga':
			return import('flatpickr/dist/l10n/ga.js');
		case 'gr':
			return import('flatpickr/dist/l10n/gr.js');
		case 'he':
			return import('flatpickr/dist/l10n/he.js');
		case 'hi':
			return import('flatpickr/dist/l10n/hi.js');
		case 'hr':
			return import('flatpickr/dist/l10n/hr.js');
		case 'hu':
			return import('flatpickr/dist/l10n/hu.js');
		case 'id':
			return import('flatpickr/dist/l10n/id.js');
		case 'is':
			return import('flatpickr/dist/l10n/is.js');
		case 'it':
			return import('flatpickr/dist/l10n/it.js');
		case 'ja':
			return import('flatpickr/dist/l10n/ja.js');
		case 'ka':
			return import('flatpickr/dist/l10n/ka.js');
		case 'km':
			return import('flatpickr/dist/l10n/km.js');
		case 'ko':
			return import('flatpickr/dist/l10n/ko.js');
		case 'kz':
			return import('flatpickr/dist/l10n/kz.js');
		case 'lt':
			return import('flatpickr/dist/l10n/lt.js');
		case 'lv':
			return import('flatpickr/dist/l10n/lv.js');
		case 'mk':
			return import('flatpickr/dist/l10n/mk.js');
		case 'mn':
			return import('flatpickr/dist/l10n/mn.js');
		case 'ms':
			return import('flatpickr/dist/l10n/ms.js');
		case 'my':
			return import('flatpickr/dist/l10n/my.js');
		case 'nl':
			return import('flatpickr/dist/l10n/nl.js');
		case 'no':
			return import('flatpickr/dist/l10n/no.js');
		case 'pa':
			return import('flatpickr/dist/l10n/pa.js');
		case 'pl':
			return import('flatpickr/dist/l10n/pl.js');
		case 'pt':
			return import('flatpickr/dist/l10n/pt.js');
		case 'ro':
			return import('flatpickr/dist/l10n/ro.js');
		case 'ru':
			return import('flatpickr/dist/l10n/ru.js');
		case 'si':
			return import('flatpickr/dist/l10n/si.js');
		case 'sk':
			return import('flatpickr/dist/l10n/sk.js');
		case 'sl':
			return import('flatpickr/dist/l10n/sl.js');
		case 'sq':
			return import('flatpickr/dist/l10n/sq.js');
		case 'sr':
			return import('flatpickr/dist/l10n/sr.js');
		case 'sv':
			return import('flatpickr/dist/l10n/sv.js');
		case 'th':
			return import('flatpickr/dist/l10n/th.js');
		case 'tr':
			return import('flatpickr/dist/l10n/tr.js');
		case 'uk':
			return import('flatpickr/dist/l10n/uk.js');
		case 'uz':
			return import('flatpickr/dist/l10n/uz.js');
		case 'vn':
			return import('flatpickr/dist/l10n/vn.js');
		case 'zh-CN':
			return import('flatpickr/dist/l10n/zh.js');
		case 'zh-TW':
			return import('flatpickr/dist/l10n/zh-tw.js');
		default:
			return Promise.resolve();
	}
}