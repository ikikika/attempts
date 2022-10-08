import React from "react";

const SuggestionsComponent = ({
  filteredSuggestions,
  activeSuggestionIndex,
  onClick,
}) => {
  return filteredSuggestions.length ? (
    <ul class="suggestions">
      {filteredSuggestions.map((suggestion, index) => {
        let className;
        // Flag the active suggestion with a class
        if (index === activeSuggestionIndex) {
          className = "suggestion-active";
        }
        return (
          <li className={className} key={suggestion} onClick={onClick}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : (
    <div class="no-suggestions">No suggestions</div>
  );
};

export default SuggestionsComponent;
