import moment from 'moment';
export function GetDateTime(str) { // string is from key e.g. raw-1231115123
	

	const timestamp_str = str.replace('history-','');
	return moment(1511057632434).format('MMM Do YY');
}