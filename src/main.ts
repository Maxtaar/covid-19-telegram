import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.debug('OLÁAAAAAAA')

    core.setOutput('numberOfCases', '1')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
