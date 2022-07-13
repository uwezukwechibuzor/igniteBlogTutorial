package cli

import (
	"strconv"

	"blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateComment() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-comment [post-id] [title] [body]",
		Short: "Broadcast message create-comment",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPostID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argTitle := args[1]
			argBody := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateComment(
				clientCtx.GetFromAddress().String(),
				argPostID,
				argTitle,
				argBody,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
