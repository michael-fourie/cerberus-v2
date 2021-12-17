import { Provider } from '@ethersproject/providers';
import { Contract, Signer, utils } from 'ethers';

import type { BondContract, BondContractInterface } from '../BondContract';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'OHM_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'LP_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'treasury_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'distributor_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'DAO_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'circulatingOHMContract_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'bondCalculator_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipPulled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipPushed',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DAO',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DAOShare',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'LP',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'OHM',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bondCalculator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'bondInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'valueRemaining',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'payoutRemaining',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastBlock',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vestingPeriod',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'pricePaid',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bondPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bondPriceInDAI',
    outputs: [
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bondPriceWithoutFloor',
    outputs: [
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'circulatingOHMContract',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'controlVariable',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'debtRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: '_debtRatio',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxPremium_',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'depositor_',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'distributor',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'manager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxPayout',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxPayoutPercent',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value_',
        type: 'uint256',
      },
    ],
    name: 'payoutFor',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'depositor_',
        type: 'address',
      },
    ],
    name: 'pendingPayoutFor',
    outputs: [
      {
        internalType: 'uint256',
        name: '_pendingPayout',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'depositor_',
        type: 'address',
      },
    ],
    name: 'percentVestedFor',
    outputs: [
      {
        internalType: 'uint256',
        name: '_percentVested',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pullManagement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner_',
        type: 'address',
      },
    ],
    name: 'pushManagement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token_',
        type: 'address',
      },
    ],
    name: 'recoverLostToken',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceManagement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'controlVariable_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vestingTerm_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minPrice_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxPayout_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'DAOShare_',
        type: 'uint256',
      },
    ],
    name: 'setBondTerm',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalDebt',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'treasury',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vestingTerm',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class BondContract__factory {
  static readonly abi = _abi;

  static createInterface(): BondContractInterface {
    return new utils.Interface(_abi) as BondContractInterface;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BondContract {
    return new Contract(address, _abi, signerOrProvider) as BondContract;
  }
}
