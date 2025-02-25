import path from 'path';
import { introspectSoap } from './soap-introspection';

describe('introspectSoap', () => {
	describe('introspection kind:file', function () {
		const fixturePath = path.join(__dirname, 'testdata', 'soap');

		const files = ['greeting.wsdl'];

		const runTest = (filePath: string) => {
			return introspectSoap({
				source: {
					kind: 'file',
					filePath,
				},
			});
		};

		files.forEach((file) => {
			it(`should introspect ${file} succesfully`, async () => {
				const filePath = path.join(fixturePath, file);
				const result = await (await runTest(filePath))({});
				expect(result.Schema).toMatchSnapshot();
			});
		});
	});
});
