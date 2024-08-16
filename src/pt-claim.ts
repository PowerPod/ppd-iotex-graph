import { PTTokensClaimed as PTTokensClaimedEvent } from '../generated/PTClaim/PTClaim'
import { PTTokensClaimed } from '../generated/schema'

export function handlePTTokensClaimed(event: PTTokensClaimedEvent): void {
  let entity = new PTTokensClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.claimant = event.params.claimant
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
