import React, { useState, useEffect } from 'react';
import './Boulier.css';

const Boulier = () => {
  const [columns, setColumns] = useState(5);
  const [total, setTotal] = useState(0);
  const [abacusState, setAbacusState] = useState([]);

  // Initialize abacus state
  useEffect(() => {
    const initialState = Array(columns).fill().map(() => ({
      upper: false, // false = down (not counting), true = up (counting)
      lower: Array(4).fill(false) // false = down (not counting), true = up (counting)
    }));
    setAbacusState(initialState);
    calculateTotal(initialState);
  }, [columns]);

  const calculateTotal = (state) => {
    let sum = 0;
    state.forEach((column, index) => {
      const position = state.length - 1 - index;
      const upperValue = column.upper ? 5 : 0;
      const lowerValue = column.lower.filter(bead => bead).length;
      const columnValue = (upperValue + lowerValue) * Math.pow(10, position);
      sum += columnValue;
    });
    setTotal(sum);
  };

  const toggleUpperBead = (columnIndex) => {
    const newState = [...abacusState];
    newState[columnIndex] = {
      ...newState[columnIndex],
      upper: !newState[columnIndex].upper
    };
    setAbacusState(newState);
    calculateTotal(newState);
  };

  const toggleLowerBead = (columnIndex, beadIndex) => {
    const newState = [...abacusState];
    const currentBeadState = newState[columnIndex].lower[beadIndex];
    
    // If moving bead up, move all beads below it up
    if (!currentBeadState) {
      for (let i = 0; i <= beadIndex; i++) {
        newState[columnIndex].lower[i] = true;
      }
    } 
    // If moving bead down, move all beads above it down
    else {
      for (let i = beadIndex; i < 4; i++) {
        newState[columnIndex].lower[i] = false;
      }
    }
    
    setAbacusState(newState);
    calculateTotal(newState);
  };

  const addColumn = () => {
    if (columns < 8) {
      setColumns(columns + 1);
    }
  };

  const removeColumn = () => {
    if (columns > 1) {
      setColumns(columns - 1);
    }
  };

  const renderColumn = (columnIndex) => {
    const column = abacusState[columnIndex];
    if (!column) return null;

    return (
      <div className="abacus-column" key={columnIndex}>
        <span className="column-value">
          {Math.pow(10, (abacusState.length - 1 - columnIndex))}
        </span>
        <div className="upper-section">
          <div 
            className={`bead upper-bead ${column.upper ? 'active' : ''}`}
            onClick={() => toggleUpperBead(columnIndex)}
          />
        </div>
        <div className="divider-bar"></div>
        <div className="lower-section">
          {column.lower.map((isActive, beadIndex) => (
            <div
              key={beadIndex}
              className={`bead lower-bead ${isActive ? 'active' : ''}`}
              onClick={() => toggleLowerBead(columnIndex, beadIndex)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="boulier-container">
      <div className="controls">
        <div className="column-control">
          <button onClick={removeColumn} disabled={columns <= 1}>-</button>
          <span>Columns: {columns}</span>
          <button onClick={addColumn} disabled={columns >= 8}>+</button>
        </div>
        <div className="total-display">
          Total: {total.toLocaleString()}
        </div>
      </div>
      <div className="abacus-frame">
        <div className="abacus-border">
          {[...Array(columns)].map((_, index) => renderColumn(index))}
        </div>
      </div>
      <div className="instructions">
        <h3>How to use:</h3>
        <ul>
          <li>Upper beads are worth 5</li>
          <li>Lower beads are worth 1</li>
          <li>Click beads to move them</li>
          <li>Each column represents a decimal place</li>
        </ul>
      </div>
    </div>
  );
};

export default Boulier;