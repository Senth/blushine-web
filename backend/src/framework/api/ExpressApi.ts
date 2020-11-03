import { ApiAdapter } from '../../adapters/api/ApiAdapter'
import { ExpressApiHelper } from './ExpressApiHelper'
import { ExpressSerializer } from './ExpressSerializer'

export class ExpressApi {
  readonly api: ExpressApiHelper

  constructor(apiAdapter: ApiAdapter) {
    this.api = new ExpressApiHelper(apiAdapter)
    this.bindApi()
  }

  private bindApi() {
    this.bindVerification()
  }

  private bindVerification() {
    // // Get all
    // this.api.getAuthorized('/api/verification/:fiscalYearId', (adapter, request, userId) => {
    // 	const fiscalYearId: Id = ExpressSerializer.deserialize(request.params.fiscalYearId)
    // 	return adapter.verification.getAll({ userId: userId, fiscalYearId: fiscalYearId })
    // })
    // // Add single
    // this.api.postAuthorized('/api/verification/add', async (adapter, request, userId, files) => {
    // 	const verificationData = ExpressSerializer.deserialize(request.body)
    // 	verificationData.files = files
    // 	const input: VerificationNewInput = { userId: userId, verification: verificationData }
    // 	if (VerificationNewInput.validate(input)) {
    // 		return adapter.verification.add(input)
    // 	}
    // })
    // // Add custom transaction
    // this.api.postAuthorized('/api/verification/add-custom', async (adapter, request, userId, files) => {
    // 	const verifictationData = ExpressSerializer.deserialize(request.body)
    // 	verifictationData.files = files
    // 	const input: VerificationNewCustomTransactionInput = { userId: userId, verification: verifictationData }
    // 	if (VerificationNewCustomTransactionInput.validate(input)) {
    // 		return adapter.verification.addCustom(input)
    // 	}
    // })
    // // Add from parser
    // this.api.postAuthorized('/api/verification/add-from-files', async (adapter, request, userId, files) => {
    // 	const input: VerificationNewFromParserInput = { userId: userId, files: files }
    // 	if (VerificationNewFromParserInput.validate(input)) {
    // 		return adapter.verification.addFromParser(input)
    // 	}
    // })
  }
}
