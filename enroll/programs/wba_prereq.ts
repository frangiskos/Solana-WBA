export type WbaPrereq = {
    version: '0.1.0';
    name: 'wba_prereq';
    instructions: Array<
        | {
              name: 'complete';
              accounts: Array<
                  | {
                        name: 'signer';
                        isMut: true;
                        isSigner: true;
                    }
                  | {
                        name: 'prereq';
                        isMut: true;
                        isSigner: false;
                    }
                  | {
                        name: 'systemProgram';
                        isMut: false;
                        isSigner: false;
                    }
              >;
              args: Array<{
                  name: 'github';
                  type: 'bytes';
              }>;
          }
        | {
              name: 'update';
              accounts: Array<
                  | {
                        name: 'signer';
                        isMut: true;
                        isSigner: true;
                    }
                  | {
                        name: 'prereq';
                        isMut: true;
                        isSigner: false;
                    }
                  | {
                        name: 'systemProgram';
                        isMut: false;
                        isSigner: false;
                    }
              >;
              args: Array<{
                  name: 'github';
                  type: 'bytes';
              }>;
          }
    >;

    accounts: Array<{
        name: 'PrereqAccount';
        type: {
            kind: 'struct';
            fields: Array<
                | {
                      name: 'github';
                      type: 'bytes';
                  }
                | {
                      name: 'key';
                      type: 'publicKey';
                  }
            >;
        };
    }>;
    errors: Array<{
        code: 6000;
        name: 'InvalidGithubAccount';
        msg: 'Invalid Github account';
    }>;
};

export const IDL: WbaPrereq = {
    version: '0.1.0',
    name: 'wba_prereq',
    instructions: [
        {
            name: 'complete',
            accounts: [
                {
                    name: 'signer',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'prereq',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'github',
                    type: 'bytes',
                },
            ],
        },
        {
            name: 'update',
            accounts: [
                {
                    name: 'signer',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'prereq',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'github',
                    type: 'bytes',
                },
            ],
        },
    ],
    accounts: [
        {
            name: 'PrereqAccount',
            type: {
                kind: 'struct',
                fields: [
                    {
                        name: 'github',
                        type: 'bytes',
                    },
                    {
                        name: 'key',
                        type: 'publicKey',
                    },
                ],
            },
        },
    ],
    errors: [
        {
            code: 6000,
            name: 'InvalidGithubAccount',
            msg: 'Invalid Github account',
        },
    ],
};
