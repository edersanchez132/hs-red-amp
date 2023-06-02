import { Amplify, Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import('./bootstrap')
	.catch(err => console.error(err));
