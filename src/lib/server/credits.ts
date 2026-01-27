import { Octokit, RequestError } from 'octokit';

const octokit = new Octokit();

let maintainers: string[] | undefined;
let contributors: string[] | undefined;
let lastRequest = 0;

export async function getCredits() {
	if (lastRequest < Date.now() - 1000 * 60 /* One hour */) {
		try {
			if (process.env.NODE_ENV === 'production') {
				console.debug('Fetching credits from GitHub...');
				maintainers = await fetchMaintainers();
				contributors = await fetchContributors();
			} else {
				console.debug('Using fixed credits in development environment...');
				maintainers = ['misode', 'rx-dev', 'vberlier'];
				contributors = [
					'vberlier',
					'misode',
					'edayot',
					'rx-dev',
					'ritikshah',
					'Arcensoth',
					'TheWii',
					'MichaelBrunn3r',
					'Tracktark',
					'CarbonSmasher',
					'DoubleF3lix',
					'fewwan',
					'hexnowloading',
					'ItsGraphEx',
					'OrangeUtan',
					'Newtbytes'
				];
			}
		} catch (error) {
			if (error instanceof RequestError) {
				console.error(`There was an error fetching the contributors from GitHub:\n| ${error}`);
				console.error('Trying to use cached credits...');
			} else {
				throw error;
			}
		}
		lastRequest = Date.now();
	}

	if (!maintainers || !contributors) throw new Error('No credits found');

	console.debug('Done!');

	return {
		maintainers: [...maintainers.map((u) => ({ user: u, url: `https://github.com/${u}` }))],
		contributors: [...contributors.map((u) => ({ user: u, url: `https://github.com/${u}` }))]
	};
}

const fetchMaintainers = async () =>
	octokit.rest.orgs
		.listMembers({ org: 'none' })
		.then((response) => response.data.filter((u) => !isBot(u)).map((u) => u.login ?? ''));

const fetchContributors = async () =>
	octokit.rest.repos
		.listContributors({ owner: 'mcbeet', repo: 'none' })
		.then((response) => response.data.filter((u) => !isBot(u)).map((u) => u.login ?? ''));

const isBot = (u: { type?: string; login?: string }) =>
	u.type == 'Bot' || u.login == 'actions-user';
