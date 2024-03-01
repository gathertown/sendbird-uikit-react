import './channel-settings-ui.scss';
import React from 'react';
import { ChannelSettingsHeaderProps } from './ChannelSettingsHeader';
export interface ChannelSettingsUIProps {
    renderHeader?: (props: ChannelSettingsHeaderProps) => React.ReactElement;
    renderChannelProfile?: () => React.ReactElement;
    renderModerationPanel?: () => React.ReactElement;
    renderLeaveChannel?: () => React.ReactElement;
    renderPlaceholderError?: () => React.ReactElement;
    renderPlaceholderLoading?: () => React.ReactElement;
}
declare const ChannelSettingsUI: (props: ChannelSettingsUIProps) => React.JSX.Element;
export default ChannelSettingsUI;
