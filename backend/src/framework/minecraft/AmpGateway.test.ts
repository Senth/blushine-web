import { AmpGateway } from './AmpGateway'

describe('AmpGateway #amp #hot', () => {
  let ampGateway: AmpGateway

  beforeEach(() => {
    ampGateway = new AmpGateway()
  })

  it('Run command', async () => {
    jest.setTimeout(15000)
    const promise = ampGateway.runCommands(['jest test'])
    await expect(promise).resolves.not.toThrow()
  })
})
