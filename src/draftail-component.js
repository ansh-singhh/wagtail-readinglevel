import PropTypes from 'prop-types';
import { ToolbarButton } from './lib';
import readinglevel from './lib/helpers/readinglevel';

const React = window.React;
const TOOLBAR_ICON = null;

/*
 * A  control that displays the reading age of the content inside this rich text field.
 */
const ReadingTime = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = readinglevel(text);
    
    if(!stats) {
        var message = "Reading Age: N/A"
    }
    else {
        var message = "Reading Age: " + stats.age;
    }

    return (
        <ToolbarButton
            name="READING_TIME"
            icon={TOOLBAR_ICON}
            label={`${message}`}
            onClick={() => {
                // eslint-disable-next-line no-alert
                window.alert(`Reading age: ${stats.age}, Readability Score: ${stats.score}`)
            }}
        />
    );
};

ReadingTime.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default ReadingTime;