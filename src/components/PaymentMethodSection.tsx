'use client';

import { useState } from 'react';
import { MessageText1 } from 'iconsax-react';
import clsx from 'clsx';

interface PaymentMethodSectionProps {
    amount: number;
    planName: string;
    onPaymentSuccess?: () => void;
    onPaymentError?: (error: any) => void;
}

export const PaymentMethodSection = ({
    amount,
    planName,
    onPaymentSuccess,
    onPaymentError,
}: PaymentMethodSectionProps) => {
    const [upiId, setUpiId] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const handleUpiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUpiId(value);
        // Reset validation state when input changes
        setIsValid(null);
    };

    const validateUpiId = () => {
        // Basic UPI ID validation regex
        const upiRegex = /^[\w\.\-_]{3,}@[a-zA-Z]{3,}$/;
        const isValidUpi = upiRegex.test(upiId);
        setIsValid(isValidUpi);

        if (isValidUpi) {
            onPaymentSuccess?.();
        } else {
            onPaymentError?.('Invalid UPI ID');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6">
            {/* Header Section */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-6 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <MessageText1 size={24} className="text-gray-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">UPI ID</h2>
                    <p className="text-gray-600">PhonePe, Gpay, Paytm, BHIM & more</p>
                </div>
            </div>

            {/* UPI Input Section */}
            <div className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        value={upiId}
                        onChange={handleUpiChange}
                        placeholder="Enter UPI ID (eg: mobilenumber@upi)"
                        className={clsx(
                            "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2",
                            {
                                'border-gray-300 focus:ring-primary/20 focus:border-primary': isValid === null,
                                'border-green-500 focus:ring-green-200 focus:border-green-500': isValid === true,
                                'border-red-500 focus:ring-red-200 focus:border-red-500': isValid === false,
                            }
                        )}
                    />
                    {isValid !== null && (
                        <div className={clsx(
                            "text-sm mt-1",
                            isValid ? "text-green-600" : "text-red-600"
                        )}>
                            {isValid ? "Valid UPI ID" : "Invalid UPI ID format"}
                        </div>
                    )}
                </div>

                <button
                    onClick={validateUpiId}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                    Proceed to Pay ₹{amount}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                    By proceeding, you agree to the Terms & Conditions
                </p>
            </div>
        </div>
    );
}; 