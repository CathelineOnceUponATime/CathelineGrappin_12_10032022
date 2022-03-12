/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* global fetch, fetchInformation */
/* eslint no-undef: "error" */
import { useState, useEffect } from 'react'

export async function fetchInformation (user) {
  let response
  let data
  try {
    response = await fetch('http://localhost:3000/user/' + user + '')
    data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log('----- Error -----', err)
  }
}

export async function fetchActivity (user) {
  let response
  let data
  try {
    response = await fetch('http://localhost:3000/user/' + user + '/activity')
    data = await response.json()
  } catch (err) {
    console.log('----- Error -----', err)
  }
  return data
}

export async function fetchAverageSession (user) {
  let response
  let data
  try {
    response = await fetch(
      'http://localhost:3000/user/' + user + '/average-session'
    )
    data = await response.json()
  } catch (err) {
    console.log('----- Error -----', err)
  }
  return data
}

export async function fetchPerformance (user) {
  let response
  let data
  try {
    response = await fetch(
      'http://localhost:3000/user/' + user + '/performance'
    )
    data = await response.json()
  } catch (err) {
    console.log('----- Error -----', err)
  }
  return data
}
