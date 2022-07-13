package cli

import (
    "strconv"
	
	 "github.com/spf13/cast"
	"github.com/spf13/cobra"
    "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"blog/x/blog/types"
)

var _ = strconv.Itoa(0)

func CmdComments() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "comments [id]",
		Short: "Query comments",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			 reqId, err := cast.ToUint64E(args[0])
            		if err != nil {
                		return err
            		}
			
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryCommentsRequest{
				
                Id: reqId, 
            }

            

			res, err := queryClient.Comments(cmd.Context(), params)
            if err != nil {
                return err
            }

            return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

    return cmd
}