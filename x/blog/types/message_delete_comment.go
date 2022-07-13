package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeleteComment = "delete_comment"

var _ sdk.Msg = &MsgDeleteComment{}

func NewMsgDeleteComment(creator string, commentID uint64, postID uint64) *MsgDeleteComment {
	return &MsgDeleteComment{
		Creator:   creator,
		CommentID: commentID,
		PostID:    postID,
	}
}

func (msg *MsgDeleteComment) Route() string {
	return RouterKey
}

func (msg *MsgDeleteComment) Type() string {
	return TypeMsgDeleteComment
}

func (msg *MsgDeleteComment) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteComment) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteComment) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
