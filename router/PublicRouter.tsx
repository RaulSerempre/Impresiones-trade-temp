import React from 'react'
import { PublicLayout } from '../src/components/layout/PublicLayout'
import FormPage from '../src/components/formpage/FormPage'
import { Routes, Route } from "react-router-dom"

export const PublicRouter = () => {

    return (
        <>
            <PublicLayout>
                <Routes>
                    <Route path="/"/>
                    <Route path="/:formId" element={<FormPage />} />
                </Routes>
            </PublicLayout>
        </>
    )

}
