import { browser } from '$app/environment';
import Plausible from 'plausible-tracker';

export const plausible = browser
	? Plausible({
			domain: 'makers.appwrite.io'
	  })
	: null;
