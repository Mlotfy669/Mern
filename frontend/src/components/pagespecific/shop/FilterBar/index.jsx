import { Checkbox, FormControlLabel, FormGroup, Slider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { ratingList } from './data';
import styles from './index.module.scss';

const PrettoSlider = styled(Slider)({
  color: '#088178',
  height: 8,
  maxWidth: 230,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 10,
    background: 'unset',
    padding: 0,
    width: 25,
    height: 25,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#088178',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -80%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -80%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    columnGap:'5px',
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid #98dbd6',
    color: '#088178',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      border: '1px solid #98dbd6',
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      background: '#98dbd6',
      color: '#088178',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#98dbd6',
        color: '#088178',
      },
    },
  },
});


const FilterBar = ({
  selectedPrice,
  handleChangePrice,
  category,
  changeCheckedCategory,
  selectedRating,
  selectRating
}) => {

  const classes = useStyles();

  return (

    <div className={styles.container} id="filterBar">
      <div className={styles.categoryContainer}>
        <span className={styles.title}>Category</span>
        <FormGroup className={styles.checkboxForm}>
          {category.map((cat) => (
            <FormControlLabel
                key={cat.id}
                control={<Checkbox
                style={{ color: "#088178" }}
                size="small"
                checked={cat.checked}
                onChange={() => changeCheckedCategory(cat.id)} />}
                label={cat.label}
                className={styles.label} />
          ))}
        </FormGroup>
      </div>
      <div className={styles.pricingContainer}>
        <span className={styles.title}>Price</span>
        <div className={styles.priceForm}>
          <PrettoSlider
            valueLabelDisplay="on"
            aria-label="pretto slider"
            min={0}
            max={1000}
            value={selectedPrice}
            onChange={handleChangePrice}
          />
        </div>
      </div>
      <div className={styles.ratingContainer}>
        <span className={styles.title}>Rating</span>
        <div className={styles.ratingForm}>
          <ToggleButtonGroup
            exclusive
            value={selectedRating}
            onChange={selectRating}
            className={classes.root}
          >
            {ratingList.map(({ label, id, value }) => (
              <ToggleButton className={classes.toggle} key={id} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default FilterBar