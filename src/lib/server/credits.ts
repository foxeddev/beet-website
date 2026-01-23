import { Octokit } from 'octokit';

const octokit = new Octokit();

export async function getCredits() {
	const members = (await octokit.rest.orgs.listMembers({ org: 'mcbeet' })).data
		.filter((u) => !isBot(u))
		.map((u) => u.login);

	const contributors = (
		await octokit.rest.repos.listContributors({ owner: 'mcbeet', repo: 'beet' })
	).data
		.filter((u) => !isBot(u))
		.map((u) => u.name ?? u.login);

	return [
		'$ beet build',
		'',
		'Building credits...',
		'',
		'Maintainers:',
		...members.map((u) => `* ${u}`),
		'',
		'Contributors:',
		...contributors.map((u) => `* ${u}`),
		'',
		'Website:',
		'* FoxedDev',
		'',
		'Done!'
	].join('\n');
}

const isBot = (u: { type?: string; login?: string }) =>
	u.type == 'Bot' || u.login == 'actions-user';
