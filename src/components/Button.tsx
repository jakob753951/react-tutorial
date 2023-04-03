import { ReactNode } from "react"

export enum ButtonType {
	Primary,
	Secondary,
	Success,
	Danger,
	Warning,
	Info,
	Light,
	Dark,
	Link,
}

interface Props {
	type?: ButtonType
	onclick: () => void
	children: ReactNode
}

const buttonTypeToClass = (type: ButtonType) => {
	switch (type) {
		case ButtonType.Primary:	{return "btn-primary"}
		case ButtonType.Secondary:	{return "btn-secondary"}
		case ButtonType.Success:	{return "btn-success"}
		case ButtonType.Danger:		{return "btn-danger"}
		case ButtonType.Warning:	{return "btn-warning"}
		case ButtonType.Info:		{return "btn-info"}
		case ButtonType.Light:		{return "btn-light"}
		case ButtonType.Dark:		{return "btn-dark"}
		case ButtonType.Link:		{return "btn-link"}
	}
}

export default function Button({ type=ButtonType.Primary, onclick, children }: Props) {
	return (
		<div className={'btn ' + buttonTypeToClass(type)} onClick={() => onclick()}>{children}</div>
	)
}